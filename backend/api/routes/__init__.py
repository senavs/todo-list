from fastapi import APIRouter

from . import index, auth, list

router = APIRouter()

router.include_router(index.router)
router.include_router(auth.router, prefix='/auth', tags=['Authenticate'])
router.include_router(list.router, prefix='/lists', tags=['Lists'])
