"use client";

import TodoForm from "./TodoForm";

export default function TodoContainer() {
  return (
    <div className="mt-2 w-full flex flex-col min-h-screen justify-between">
      <div className="h-[75vh]"></div>
      <div className="w-[80%] h-[20vh] mx-2">
        <TodoForm />
      </div>
    </div>
  );
}
