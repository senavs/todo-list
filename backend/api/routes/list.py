from fastapi import APIRouter, Depends

from .models.list import CreateRequest, CreateResponse, ListResponse
from ..controllers.list import create, list_
from ..controllers.auth import login_required

router = APIRouter()


@router.get('/list', status_code=200, response_model=ListResponse)
def router_list(auth: str = Depends(login_required)):
    _, user = auth
    result = list_(user['id_user'])
    return {'lists': result}


@router.post('/create', status_code=201, response_model=CreateResponse)
def router_create(body: CreateRequest, auth: str = Depends(login_required)):
    _, user = auth
    result = create(user['id_user'], **body.dict())
    return {'list': result}
