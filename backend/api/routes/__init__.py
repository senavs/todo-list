from fastapi import APIRouter

from . import index, auth

router = APIRouter()

router.include_router(index.router)
router.include_router(auth.router, prefix='/auth', tags=['Authenticate'])
