from fastapi import APIRouter, Request
from config.database import connect_to_mongodb

connection =  connect_to_mongodb()

todo = APIRouter()

@todo.get("/")
def get_todos():
    try:
        todo_data = connection.ArticleSite.todos.find({})
        return {"todos":todo_data}
    except(e):
        print(e)
        return None