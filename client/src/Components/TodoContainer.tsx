"use client";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


export default function TodoContainer() {

  return (
    <div className="mt-2 w-full flex flex-col min-h-screen items-center gap-5">
      <div className="w-[97%] lg:max-h-[20vh] mx-2">
        <TodoForm />
      </div>
      <div className="lg:max-h-[70vh] w-[97%] my-4">
        <TodoList></TodoList>
      </div>
    </div>
  );
}
