def todoEntity(item) -> dict:
    return {
        "id": str(item["_id"]),
        "title": item["title"],
        "description": item["description"],
        "important": item["important"],
        "completed": item["completed"],
    }


def todoListEntity(items) -> list:
    return [todoEntity(item) for item in items]
