from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
from typing import Optional, List, Dict
from langchain_core.messages import BaseMessage, HumanMessage, AIMessage
from config import model, PromptTemplate
from ai.state import TripPlannerState

init_router = APIRouter()


SESSION_MEMORY: Dict[str, List[str]] = {}

class InitialAgentOutput(BaseModel):
    response: str
    no_of_people: Optional[int] = None
    budget: Optional[int] = None
    source: Optional[str] = None
    destination: Optional[str] = None
    no_of_days: Optional[int] = None
    start_date: Optional[str] = None
    end_date: Optional[str] = None
    kids: bool = False
    women_pregnant: bool = False
    extra_info: Optional[List[str]] = None
    completed_plan: bool
    summary: Optional[str] = None


init_model = model.with_structured_output(InitialAgentOutput)

init_prompt = PromptTemplate(
    input_variables=["history", "user_input"],
    template="""
You are an expert, empathetic travel planner AI.
Your ONLY task is to extract structured information from the conversation and decide whether enough information exists to proceed with trip planning.

### CONVERSATION HISTORY
{history}

### CURRENT USER INPUT
{user_input}

--------------------------------
### STRUCTURED EXTRACTION RULES

Extract the following fields STRICTLY based on what the user has explicitly mentioned.
DO NOT guess, assume, or hallucinate missing values.

#### 1. Basic Logistics
- no_of_people: integer or null
- budget: integer (total trip budget) or null
- source: city or location name or null
- destination: city or location name or null
- no_of_days: integer or null
- start_date: string (ISO or natural language) or null
- end_date: string (ISO or natural language) or null

If both dates are present, you may infer no_of_days.
If only no_of_days is present, keep dates as null.

#### 2. Constraints
- kids: true ONLY if children, kids, infants, or minors are explicitly mentioned
- women_pregnant: true ONLY if pregnancy is explicitly mentioned

Default both to false if not mentioned.

#### 3. Preferences
- extra_info: list of strings capturing preferences such as:
  - food preferences or dietary restrictions
  - preferred activities (adventure, leisure, religious, sightseeing, etc.)
  - hotel type, travel pace, special requests

Set extra_info to null if nothing relevant is mentioned.

--------------------------------
### COMPLETION LOGIC

The following fields are MANDATORY to consider the plan complete:
- destination
- source
- budget
- no_of_people
- (either start_date & end_date OR no_of_days)

#### If ANY mandatory field is missing:
- Set completed_plan = false
- response:
  - Ask politely for ONLY 1 or 2 missing critical details
  - Be conversational, empathetic, and concise
  - Do NOT list all missing fields at once
- summary must be null

#### If ALL mandatory fields are present:
- Set completed_plan = true
- response:
  - Respond naturally as a travel planner acknowledging the details
  - You MAY ask soft follow-up questions (preferences, flexibility, etc.)
- summary:
  - Provide a concise, factual summary of the trip details
  - Do NOT introduce new information

--------------------------------
IMPORTANT CONSTRAINTS:
- Output MUST strictly match the provided schema
- Use null for unknown values (do not omit fields)
- Do not include explanations, markdown, or extra text outside the structured response
"""
)


init_chain = init_prompt | init_model

class UserRequest(BaseModel):
    session_id: str
    user_input: str

@init_router.post("/init_agent")
def init_agent(request: UserRequest):
    session_id = request.session_id
    user_input = request.user_input

    if session_id not in SESSION_MEMORY:
        SESSION_MEMORY[session_id] = []
    
    history_str = "\n".join(SESSION_MEMORY[session_id])

    try:
        result = init_chain.invoke({
            "history": history_str,
            "user_input": user_input
        })
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    # 1. Append User Input
    SESSION_MEMORY[session_id].append(f"User: {user_input}")
    # 2. Append AI Response (Extracted from the structured output)
    SESSION_MEMORY[session_id].append(f"AI: {result.response}")

    return result