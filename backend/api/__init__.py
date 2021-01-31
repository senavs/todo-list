from fastapi import FastAPI

from .routes import router

__version__ = '0.0.1'

app = FastAPI(title='TO DO list API',
              description='To do list WEB application with Python, NodeJS and React.',
              version=__version__)

app.include_router(router)