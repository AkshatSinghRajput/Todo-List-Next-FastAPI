from pydantic import BaseModel

class Todo(BaseModel):
    title: str
    description: str
    important: bool
    completed: bool