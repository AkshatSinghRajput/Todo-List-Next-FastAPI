"use client";

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react"; // Import React from the correct package
import { AiOutlinePlus } from "react-icons/ai";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [important, setImportant] = useState(false);

  const handleForm = (e: Event) => {
    e.preventDefault();
    console.log(
      `Title: ${title}, Description: ${description}, Important: ${important}`
    );
  };

  return (
    <>
      <Card>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>Create Your Todos Here</p>
        </h5>
        <form className="flex lg:flex-row flex-col w-full items-center justify-center gap-2">
          <div className="lg:w-[40%] w-full">
            <div className="mb-2 block">
              <Label htmlFor="title1" value="Title" />
            </div>
            <TextInput
              id="title1"
              placeholder="Todo Title"
              required
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="lg:w-[40%] w-full">
            <div className="mb-2 block">
              <Label htmlFor="description1" value="Description" />
            </div>
            <TextInput
              id="description1"
              placeholder="Todo Description"
              required
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2 justify-center items-center">
              <Label htmlFor="remember">Important</Label>
              <Checkbox
                id="remember"
                className="lg:w-[50%] lg:h-[63%]"
                onChange={() => setImportant(!important)}
              />
            </div>
            <Button
              type="button"
              className=" bg-primary-600 mt-7"
              onClick={handleForm}
            >
              <AiOutlinePlus className="mr-2 h-5 w-5"></AiOutlinePlus>
              <p>Add</p>
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
}
