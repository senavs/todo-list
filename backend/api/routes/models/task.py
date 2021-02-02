from pydantic import BaseModel


class Task(BaseModel):
    id_task: int
    id_list: int
    description: str
    completed: bool


class SearchResponse(BaseModel):
    task: Task


class ListResponse(BaseModel):
    tasks: list[Task]


class CreateRequest(BaseModel):
    description: str
    completed: bool = False


class CreateResponse(BaseModel):
    task: Task


class UpdateRequest(BaseModel):
    description: str = None
    completed: bool = False


class UpdateResponse(BaseModel):
    task: Task
