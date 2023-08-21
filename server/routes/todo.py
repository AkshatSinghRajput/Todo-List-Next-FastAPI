from fastapi import APIRouter, Request, HTTPException, Body
from config.database import connect_to_mongodb
from schemas.todo import todoEntity, todoListEntity
from models.todo import Todo, Todo_request, Updated_todo_model
from uuid import uuid4


# Connecting to mongodb
connection = connect_to_mongodb()
database = connection.ArticleSite
collection = database.todos

todo = APIRouter()


# Getting All Todos
@todo.get("/")
async def get_todos() -> list[Todo]:
    # Getting All items of todo list from database
    todo_data = collection.find({})
    # Converting the data to todoListEntitu
    data = todoListEntity(todo_data)
    # Sending the data as response
    return data


# Getting Todo By id
@todo.get("/{id}")
async def get_todo_byid(id: str) -> Todo:
    todo = collection.find_one({"id": id})
    if todo:
        return todo
    raise HTTPException(404, "Unable to find Any Todo with this ID")


# Creating New Todo
@todo.post("/")
async def create_todo(todo_data: Todo_request) -> Todo:
    todo_data = todo_data.dict()
    todo = todoEntity({"id": uuid4(), **todo_data, "completed": True})
    collection.insert_one(todo)
    return todo


# Deleting the Todo
@todo.delete("/{id}")
async def delete_todo(id: str) -> bool:
    todo = collection.delete_one({"id": id})
    if todo:
        return True
    raise HTTPException(404, "Unable to find Any Todo with this ID")


# Updating the Todo
@todo.put("/{id}")
async def update_todo(id: str, todo_update: Updated_todo_model = Body(...)) -> Todo:
    # Converts the Class to dict
    todo_update = todo_update.dict()
    # Removes all the key values pair where value is None
    todo_update = {k: v for k, v in todo_update.items() if v is not None}
    # Update the Todo with id 
    updated_todo = collection.update_one({"id": id}, {"$set": todo_update})
    if updated_todo:
        update_todo = collection.find_one({"id": id})
        return update_todo
    raise HTTPException(404, "Unable to find Any Todo with this ID")
