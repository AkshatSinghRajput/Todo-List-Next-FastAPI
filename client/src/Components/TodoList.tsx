"use client";

import { Card, Button } from "flowbite-react";
import { FcTodoList } from "react-icons/fc";
import { IoCheckmarkDone } from "react-icons/io5";
import TodoCards from "./TodoCards";
import { useEffect, useState } from "react";
import getTodos from "@/services/todo.services";

export default function TodoList() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    getTodos().then((res) => {
      setTodoItems(res);
    });
  }, []);

  return (
    <Card className="w-full  ">
      <div className="mb-4 flex flex-row items-center justify-center w-full">
        <Button.Group>
          <Button className="px-6 border border-gray-400 active:bg-primary-500 focus:bg-primary-500">
            <FcTodoList className="mr-3 h-4 w-4" />
            <p>Todo</p>
          </Button>
          <Button className="px-2 active:bg-primary-500 focus:bg-primary-500 border border-gray-400">
            <IoCheckmarkDone className="mr-3 h-4 w-4" />
            <p>Completed</p>
          </Button>
        </Button.Group>
      </div>
      <div className="flow-root lg:max-h-[50vh] overflow-auto">
        {todoItems && todoItems.map((item) => <TodoCards />)}
      </div>
    </Card>
  );
}
