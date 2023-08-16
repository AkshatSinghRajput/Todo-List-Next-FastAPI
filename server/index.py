from fastapi import FastAPI
from routes.todo import todo
from fastapi.middleware.cors import CORSMiddleware

#  App Object
app = FastAPI()

origin = [
    'http://localhost:3000'
]

app.add_middleware(
    CORSMiddleware,
    allow_origin = origin,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

app.include_router(todo)

