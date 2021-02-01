from fastapi import APIRouter, Depends

from .models.list import CreateRequest, CreateResponse, ListResponse, UpdateResponse, UpdateRequest, SearchResponse
from ..controllers.list import create, list_, update, delete, search
from ..controllers.auth import login_required

router = APIRouter()


@router.get('/{id_list}/search', status_code=200, response_model=SearchResponse)
def router_search(id_list: int, auth: str = Depends(login_required)):
    _, user = auth
    result = search(id_user=user['id_user'], id_list=id_list)
    return {'list': result}


@router.get('/list', status_code=200, response_model=ListResponse)
def router_list(auth: str = Depends(login_required)):
    _, user = auth
    result = list_(id_user=user['id_user'])
    return {'lists': result}


@router.post('/create', status_code=201, response_model=CreateResponse)
def router_create(body: CreateRequest, auth: str = Depends(login_required)):
    _, user = auth
    result = create(id_user=user['id_user'], **body.dict())
    return {'list': result}


@router.put('/{id_list}/update', status_code=200, response_model=UpdateResponse)
def router_update(id_list: int, body: UpdateRequest, auth: str = Depends(login_required)):
    _, user = auth
    result = update(id_list=id_list, id_user=user['id_user'], **body.dict())
    return {'list': result}


@router.delete('/{id_list}/delete', status_code=200)
def router_update(id_list: int, auth: str = Depends(login_required)):
    _, user = auth
    delete(id_list=id_list, id_user=user['id_user'])
    return {}
