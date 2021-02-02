from sqlalchemy import Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import backref, relationship
from sqlalchemy.sql import func

from .. import BaseModel, DeclarativeBase


class List(DeclarativeBase, BaseModel):
    __tablename__ = 'LIST'

    ID_LIST = Column(Integer, autoincrement=True, nullable=False, primary_key=True, unique=True)
    ID_USER = Column(Integer, ForeignKey('USER.ID_USER', ondelete='CASCADE'), nullable=False, unique=False)
    TITLE = Column(String(64), nullable=False, unique=False)
    DESCRIPTION = Column(String(128), nullable=True, unique=False)
    CREATED_AT = Column(DateTime, nullable=False, unique=False, default=func.now(), server_default=func.now())
    UPDATED_AT = Column(DateTime, nullable=False, unique=False, default=func.now(), server_default=func.now(), onupdate=func.now(), server_onupdate=func.now())

    user = relationship('User', backref=backref('lists', cascade='all,delete', lazy='dynamic'))
