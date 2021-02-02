from fastapi import APIRouter

from . import index, auth, list, task

router = APIRouter()

router.include_router(index.router)
router.include_router(auth.router, prefix='/auth', tags=['Authenticate'])
router.include_router(list.router, prefix='/lists', tags=['Lists'])
router.include_router(task.router, prefix='/lists', tags=['Tasks'])
