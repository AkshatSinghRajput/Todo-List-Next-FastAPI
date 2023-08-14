import pymongo
import os

# Getting the Env Variables
MONGO_URI = os.environ.get("MONGO_URI")

def connect_to_mongodb():
    """Connects to MongoDB using the given MongoDB URI."""
    try:
        connection = pymongo.MongoClient(MONGO_URI)
        print("Connected SuccessFully")
        return connection
    except pymongo.errors.ConnectionFailure as e:
        print("Failed to connect to MongoDB: {}".format(e))
        return None


if __name__ == "__main__":
    connection = connect_to_mongodb()
