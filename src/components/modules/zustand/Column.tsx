"use client";

import { useState } from "react";
import Task from "./Task";
import { useStore } from "@/store/store";

const Column = ({ status }: { status: string }) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const tasks = useStore((state) =>
    state.tasks.filter((task) => task.status === status)
  );
  const addTask = useStore((state) => state.addTask);
  return (
    <>
      <div className="bg-gray-500 min-h-[20em] text-white rounded-md p-2">
        <div className="flex items-center justify-between">
          {status}
          <button
            className="bg-gray-800 p-2 rounded-md shadow-lg"
            onClick={() => setOpen(true)}
          >
            Add Task
          </button>
        </div>
        {tasks.map((items) => (
          <Task title={items.title} key={items.title} />
        ))}
        {open && (
          <div className="min-h-screen w-full flex justify-center items-center absolute top-0 left-0 bg-[rgba(0,0,0,0.5)]">
            <div className="flex flex-col gap-2 p-5 rounded-md bg-white shadow-2xl">
              <input
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
                placeholder="Enter text here"
                className="px-2 py-3 rounded-md outline-none border border-gray-500 text-black"
              />
              <button
                className="bg-gray-800 p-2 rounded-md shadow-lg"
                onClick={() => {
                  addTask(text, status);
                  setText("");
                  setOpen(false);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Column;
