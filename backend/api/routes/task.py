from fastapi import APIRouter, Depends

from .models.task import CreateRequest, CreateResponse, ListResponse, UpdateResponse, UpdateRequest, SearchResponse
from ..controllers.task import create, list_, update, delete, search
from ..controllers.auth import login_required

router = APIRouter()


@router.get('/{id_list}/tasks/{id_task}/search', status_code=200, response_model=SearchResponse)
def router_search(id_list: int, id_task: int, auth: str = Depends(login_required)):
    _, user = auth
    result = search(id_user=user['id_user'], id_list=id_list, id_task=id_task)
    return {'task': result}


@router.get('/{id_list}/tasks/list', status_code=200, response_model=ListResponse)
def router_list(id_list: int, auth: str = Depends(login_required)):
    _, user = auth
    result = list_(id_user=user['id_user'], id_list=id_list)
    return {'tasks': result}


@router.post('/{id_list}/tasks/create', status_code=201, response_model=CreateResponse)
def router_create(id_list: int, body: CreateRequest, auth: str = Depends(login_required)):
    _, user = auth
    result = create(id_user=user['id_user'], id_list=id_list, **body.dict())
    return {'task': result}


@router.put('/{id_list}/tasks/{id_task}/update', status_code=200, response_model=UpdateResponse)
def router_update(id_list: int, id_task: int, body: UpdateRequest, auth: str = Depends(login_required)):
    _, user = auth
    result = update(id_list=id_list, id_task=id_task, id_user=user['id_user'], **body.dict())
    return {'task': result}


@router.delete('/{id_list}/tasks/{id_task}/delete', status_code=200)
def router_update(id_list: int, id_task: int, auth: str = Depends(login_required)):
    _, user = auth
    delete(id_list=id_list, id_task=id_task, id_user=user['id_user'])
    return {}
