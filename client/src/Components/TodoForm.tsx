"use client";

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react"; // Import React from the correct package
import { AiOutlinePlus } from "react-icons/ai";

export default function TodoForm() {
  const [formActive, setFormActive] = useState(false);
  return (
    <>
      <Card>
        <form className="flex flex-row w-full items-center">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              placeholder="name@flowbite.com"
              required
              type="email"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" required type="password" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit" className=" bg-primary-600">
            Submit
          </Button>
        </form>
      </Card>
    </>
  );
}
