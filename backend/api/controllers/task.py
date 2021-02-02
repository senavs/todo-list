from fastapi import HTTPException

from ..database import ClientConnection, List, Task


def search(id_user: int, id_list: int, id_task) -> dict:
    with ClientConnection() as conn:
        if not conn.query(List).filter_by(ID_USER=id_user, ID_LIST=id_list).first():
            raise HTTPException(404, 'list not found')
        if not (tasks := conn.query(Task).filter_by(ID_LIST=id_list, ID_TASK=id_task).first()):
            raise HTTPException(404, 'task not found')
        result = tasks.to_dict()
    return result


def list_(id_user: int, id_list: int) -> list[dict]:
    with ClientConnection() as conn:
        if not conn.query(List).filter_by(ID_USER=id_user, ID_LIST=id_list).first():
            raise HTTPException(404, 'list not found')
        tasks = conn.query(Task).filter_by(ID_LIST=id_list).all()
        result = [task.to_dict() for task in tasks]
    return result


def create(id_user: int, id_list: int, description: str, completed: bool = False) -> dict:
    with ClientConnection() as conn:
        if not conn.query(List).filter_by(ID_USER=id_user, ID_LIST=id_list).first():
            raise HTTPException(404, 'list not found')
        new_task = Task(ID_LIST=id_list, DESCRIPTION=description, COMPLETED=completed)
        new_task.insert(conn)
        result = new_task.to_dict()
    return result


def update(id_user: int, id_list: int, id_task: int, description: str = None, completed: bool = False) -> dict:
    with ClientConnection() as conn:
        if not conn.query(List).filter_by(ID_USER=id_user, ID_LIST=id_list).first():
            raise HTTPException(404, 'list not found')
        if not (task := conn.query(Task).filter_by(ID_LIST=id_list, ID_TASK=id_task).first()):
            raise HTTPException(404, 'task not found')
        task.update(conn, DESCRIPTION=description, COMPLETED=completed)
        result = task.to_dict()
    return result


def delete(id_user: int, id_list: int, id_task: int):
    with ClientConnection() as conn:
        if not conn.query(List).filter_by(ID_USER=id_user, ID_LIST=id_list).first():
            raise HTTPException(404, 'list not found')
        if not (task := conn.query(Task).filter_by(ID_LIST=id_list, ID_TASK=id_task).first()):
            raise HTTPException(404, 'task not found')
        task.delete(conn)
