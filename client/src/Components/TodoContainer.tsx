"use client";

import TodoForm from "./TodoForm";

export default function TodoContainer() {
  return (
    <div className="mt-2 w-full flex flex-col min-h-screen justify-between items-center">
      <div className="w-[97%] h-[20vh] mx-2">
        <TodoForm />
      </div>
      <div className="h-[75vh]"></div>
    </div>
  );
}
