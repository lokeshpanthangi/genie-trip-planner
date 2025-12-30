from typing import TypedDict, List, Optional, Annotated
from langgraph.graph.message import add_messages
from langchain_core.messages import BaseMessage


class TripPlannerState(TypedDict):
    messages: Annotated[List[BaseMessage], add_messages]
    no_of_people: Optional[int]
    budget: Optional[int]
    source: Optional[str]
    destination: Optional[str]
    no_of_days: Optional[int]
    start_date: Optional[str]
    end_date: Optional[str]
    kids: bool
    women_pregnant: bool
    extra_info: Optional[List[str]]
    completed_plan: bool
    summary: Optional[str]