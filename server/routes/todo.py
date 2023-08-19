from fastapi import APIRouter, Request, HTTPException, Body
from config.database import connect_to_mongodb
from schemas.todo import todoEntity, todoListEntity
from models.todo import Todo, Todo_list
from uuid import uuid4

# Connecting to mongodb
connection = connect_to_mongodb()
database = connection.ArticleSite
collection = database.todos

todo = APIRouter()


# Getting All Todos
@todo.get("/api/todos")
async def get_todos() -> Todo_list:
    # Getting All items of todo list from database
    todo_data = collection.find({})
    # Converting the data to todoListEntitu
    data = todoListEntity(todo_data)
    # Sending the data as response
    return {"data": data}


# Getting Todo By id
@todo.get("/api/todos/{id}")
async def get_todo_byid(id: str) -> Todo | None:
    todo = collection.find_one({"id": id})
    if todo:
        return todo
    raise HTTPException(404, "Unable to find Any Todo with this ID")


# Creating New Todo
@todo.post("/api/todos")
async def create_todo(todo_data: dict):
    todo = {
        "id": uuid4(),
        "title": todo_data["title"],
        "description": todo_data["description"],
        "important": todo_data["important"],
        "completed": True,
    }
    collection.insert_one(todoEntity(todo))
