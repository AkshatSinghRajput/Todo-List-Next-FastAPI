import axios from "axios";

export default async function getTodos() {
  try {
    let request = await axios.get("http://localhost:8000/api/v1/todo");
    let todos = request.data;
    return todos;
  } catch (error) {
    console.log(error);
    return [];
  }
}
