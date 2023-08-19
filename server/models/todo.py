from pydantic import BaseModel

class Todo(BaseModel):
    id: str
    title: str
    description: str
    important: bool
    completed: bool

class Todo_list(BaseModel):
    data: list[Todo] | list[None]