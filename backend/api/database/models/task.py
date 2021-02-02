from sqlalchemy import Column, ForeignKey, Integer, String, Boolean
from sqlalchemy.orm import backref, relationship

from .. import BaseModel, DeclarativeBase


class Task(DeclarativeBase, BaseModel):
    __tablename__ = 'TASK'

    ID_TASK = Column(Integer, autoincrement=True, nullable=False, primary_key=True, unique=True)
    ID_LIST = Column(Integer, ForeignKey('LIST.ID_LIST', ondelete='CASCADE'), nullable=False, unique=False)
    DESCRIPTION = Column(String(128), nullable=True, unique=False)
    COMPLETED = Column(Boolean, nullable=True, unique=False, default='0', server_default='0')

    list = relationship('List', backref=backref('lists', cascade='all,delete', uselist=False))
