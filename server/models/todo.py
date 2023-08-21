from pydantic import BaseModel
from typing import Optional

class Todo(BaseModel):
    id: str
    title: str
    description: str
    important: bool
    completed: bool


class Todo_request(BaseModel):
    title: str
    description: str
    important: bool


class Updated_todo_model(BaseModel):
    title: Optional[str]
    description: Optional[str]
    important: Optional[bool]
    completed: Optional[bool]
