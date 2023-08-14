from fastapi import APIRouter, Request

from config.database import connect_to_mongodb
connect_to_mongodb()