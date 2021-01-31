from pydantic import BaseSettings


class APISettings(BaseSettings):
    API_HOST: str = '0.0.0.0'
    API_PORT: int = 8080
    API_DEBUG: bool = False
    API_RELOAD: bool = False
    API_LOG: bool = True


class DatabaseSettings(BaseSettings):
    DATABASE_URI: str = ''
    DATABASE_RESET: bool = False


api = APISettings()
database = DatabaseSettings()
