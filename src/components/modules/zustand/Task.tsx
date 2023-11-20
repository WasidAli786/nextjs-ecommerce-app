import { useStore } from "@/store/store";
import React from "react";

const Task = ({ title }: { title: string }) => {
  const task = useStore((state) =>
    state.tasks.find((items) => items.title === title)
  );
  const deleteTask = useStore((state) => state.deleteTask);
  return (
    <>
      <div className="bg-white rounded-md min-h-[5rem] text-black p-2 mt-2 flex flex-col justify-between">
        {task?.title}
        <div className="flex items-center justify-between">
          <button onClick={() => deleteTask(title)}>Delete</button>
          <div className="bg-gray-500 p-2 rounded-md text-white">
            {task?.status}
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
