from pydantic import BaseModel


class List(BaseModel):
    id_list: int
    id_user: int
    title: str
    description: str = None


class ListResponse(BaseModel):
    lists: list[List]


class CreateRequest(BaseModel):
    title: str
    description: str = None


class CreateResponse(BaseModel):
    list: List
