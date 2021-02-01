from ..database import ClientConnection, List


def list_(id_user: int) -> list[dict]:
    with ClientConnection() as conn:
        lists = conn.query(List).filter_by(ID_USER=id_user).all()
        result = [list.to_dict() for list in lists]

    return result


def create(id_user: int, title: str, description: str = None) -> dict:
    with ClientConnection() as conn:
        new_list = List(ID_USER=id_user, TITLE=title, DESCRIPTION=description)
        new_list.insert(conn)

        result = new_list.to_dict(exclude=['CREATE_AT', 'UPDATED_AT'])
    return result
