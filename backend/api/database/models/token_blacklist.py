from sqlalchemy import Column, DateTime, ForeignKey, Integer, Text
from sqlalchemy.sql import func

from .. import BaseModel, DeclarativeBase


class TokenBlacklist(DeclarativeBase, BaseModel):
    __tablename__ = 'TOKEN_BLACKLIST'

    ID_TOKEN_BLACKLIST = Column(Integer, autoincrement=True, nullable=False, primary_key=True, unique=True)
    TOKEN = Column(Text, nullable=False, unique=False)
    ID_USER = Column(ForeignKey('USER.ID_USER', ondelete='CASCADE'), nullable=False, unique=False)
    CREATED_AT = Column(DateTime, nullable=False, unique=False, default=func.now(), server_default=func.now())
