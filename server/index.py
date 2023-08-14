from fastapi import FastAPI
from routes.todo import todo

app = FastAPI()

app.include_router(todo)

