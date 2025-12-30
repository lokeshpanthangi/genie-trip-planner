from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
from typing import Optional, List
from langchain_core.messages import HumanMessage, AIMessage
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langgraph.graph import StateGraph, START, END
from langgraph.checkpoint.memory import MemorySaver
from config import model
from ai.state import TripPlannerState

init_router = APIRouter()

class UserRequest(BaseModel):
    session_id: str
    user_input: str

class InitialAgentOutput(BaseModel):
    response: str = Field(description="Conversational response to the user")
    no_of_people: Optional[int] = Field(default=None, description="Total travelers")
    budget: Optional[int] = Field(default=None, description="Total budget")
    source: Optional[str] = Field(default=None, description="Origin city")
    destination: Optional[str] = Field(default=None, description="Destination city")
    no_of_days: Optional[int] = Field(default=None)
    start_date: Optional[str] = Field(default=None)
    end_date: Optional[str] = Field(default=None)
    kids: bool = Field(default=False, description="True if children/infants mentioned")
    women_pregnant: bool = Field(default=False, description="True if pregnancy mentioned")
    extra_info: Optional[List[str]] = Field(default=None, description="Diet, activities, preferences")
    completed_plan: bool = Field(description="True ONLY if source, dest, budget, people, & dates are present")
    summary: Optional[str] = Field(default=None, description="Summary if plan is complete")


system_instructions = """You are an expert, empathetic travel planner AI.
Your goal is to gather specific details to build a perfect itinerary.

### LOGIC RULES:
1. **Extraction:** Only extract explicitly stated info.
2. **Completion Check:** A plan is COMPLETE only if: Destination, Source, Budget, No. of People, and Dates/Duration are known.
3. **Response Strategy:**
   - If **Incomplete**: Ask politely for 1-2 missing mandatory items.
   - If **Complete**: Confirm details warmly and generate a factual `summary`.
   - Also ask the user if there are kids or pregnant women traveling. and some extra preferences (diet, activities).
"""


prompt = ChatPromptTemplate.from_messages([
    ("system", system_instructions),
    MessagesPlaceholder(variable_name="messages"),
])


structured_llm = model.with_structured_output(InitialAgentOutput)
agent_chain = prompt | structured_llm

def call_agent_model(state: TripPlannerState):
    response = agent_chain.invoke({"messages": state["messages"]})
    
    update_dict = {
        k: v for k, v in response.dict().items() 
        if v is not None and k != "response"
    }
    
    ai_msg = AIMessage(content=response.response)
    
    return {
        "messages": [ai_msg],
        **update_dict
    }

workflow = StateGraph(TripPlannerState)
workflow.add_node("agent", call_agent_model)
workflow.add_edge(START, "agent")
workflow.add_edge("agent", END)

memory = MemorySaver()
app_graph = workflow.compile(checkpointer=memory)

@init_router.post("/init_agent")
def init_agent(request: UserRequest):
    config = {"configurable": {"thread_id": request.session_id}}
    input_message = HumanMessage(content=request.user_input)
    
    try:
        final_state = app_graph.invoke(
            {"messages": [input_message]}, 
            config=config
        )
        
        last_response = final_state["messages"][-1].content
        
        return {
            "response": last_response,
            "completed_plan": final_state.get("completed_plan"),
            "summary": final_state.get("summary")
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))