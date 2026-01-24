"use client";
import UserContext from "../../context/userContext";
import { deleteTask, getTasksOfUser } from "../../services/taskService";
import React, { useContext, useEffect, useState } from "react";
import Task from "./Task";
import { toast } from "react-toastify";

const ShowTaskPage = () => {
  const [tasks, setTask] = useState([]);
  const context = useContext(UserContext);

  async function loadTasks(userId) {
    try {
      const tasks = await getTasksOfUser(userId);
      setTask([...tasks].reverse());
      console.log(tasks); //show user task
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (context.user) {
      loadTasks(context.user._id);
    }
  }, [context.user]);

  async function deleteTaskParent(taskId) {
    try {
      const result = await deleteTask(taskId);
      console.log("delete task", result);

      const newTasks = tasks.filter((item) => item._id != taskId);
      setTask(newTasks);
      toast.success("Your task is deleted !!");
    } catch (error) {
      console.log(error);
      toast.error("Error in deleting tasks!!");
    }
  }

  return (
    <div className=" mt-3 grid grid-cols-12">
      <div className="col-span-6 col-start-4">
        <h1 className="text-3xl text-center text-teal-500 mb-3">
          Your Tasks:({tasks.length})
        </h1>
        {tasks.map((task) => (
          <Task
            task={task}
            key={task._id}
            deleteTaskParent={deleteTaskParent}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowTaskPage;
