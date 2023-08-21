from fastapi import FastAPI
from routes.todo import todo
from fastapi.middleware.cors import CORSMiddleware

#  App Object
app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(todo, tags=["TODO"], prefix="/api/v1/todo")
