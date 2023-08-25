"use client";

import { Button, Card, Checkbox } from "flowbite-react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDone } from "react-icons/io5";

export default function TodoCards() {
  return (
    <Card className="w-full my-3">
      <div className="flex flex-row">
        <div className="w-[90%]">
          <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Work fast from anywhere
          </h5>
          <p className="mb-5 text-base text-gray-500 dark:text-gray-400">
            <p>
              Stay up to date and move work forward with Flowbite on iOS &
              Android. Download the app today.
            </p>
          </p>
        </div>
        <div className="flex flex-col gap-2 w-[20%]">
          <Button className="bg-primary-500 px-2">
            <IoCheckmarkDone className="mr-3 h-4 w-4" />
            <p>Done</p>
          </Button>
          <Button className=" bg-red-500 px-2">
            <AiFillDelete className="mr-3 h-4 w-4" />
            <p>Delete</p>
          </Button>
        </div>
      </div>
    </Card>
  );
}
