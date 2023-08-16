from fastapi import APIRouter, Request
from config.database import connect_to_mongodb
from schemas.todo import todoEntity, todoListEntity

# Connecting to mongodb
connection = connect_to_mongodb()

todo = APIRouter()


# Getting All Notes
@todo.get("/")
async def get_todos():
    try:
        # Getting All items of todo list from database
        todo_data = connection.ArticleSite.todos.find({})
        # Converting the data to todoListEntitu
        data = todoListEntity(todo_data)
        # Sending the data as response
        return {"data": data}
    except Exception as e:
        print(e)
        return None
