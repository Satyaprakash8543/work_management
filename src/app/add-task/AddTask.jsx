"use client";
import React, { useState } from "react";
import Image from "next/image";
import loginsvg from "@/app/assets/loginsvg.svg";
import {addTask} from "@/services/taskService"
 import {  toast } from 'react-toastify';


// export const metadata={
//     title:"Add Task : Work Manager",
// }
const AddTask = () => {
  // console.log("This is check client componenet in browser");

  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    //temp solution
    userId:"696a19965ea7a10050ae369d",
  });

  const handleAddTask= async(event)=>{
    event.preventDefault();
    // console.log(event.target) //event.target show all form on console
    console.log(task);
    //validate task data
     try {
      
      const result=await addTask(task)
      console.log("this is testing data",result);
      // console.log(result)
      toast.success("your task is added !!",{
        position:"top-center",
      })
      
      setTask({
        title:"",
        content:"",
        status:"none"
      })

     } catch (error) {
       console.log(error);
       toast.error("Task not added !!",{
        position:"top-center"
       })
     }

  }
  return (
    <div className="grid grid-cols-12  justify-center overflow-x-hidden">
      <div className="border col-span-8 col-start-3  p-3 shadow-sm ">
        <div className="flex justify-center">
          <Image src={loginsvg} alt="login" width={200} height={150} />
        </div>

        <h1 className="text-3xl text-center text-teal-600 hover:text-teal-800 ">
          Add your task here !!
        </h1>

        <form action="#" onSubmit={handleAddTask}>
          {/* task title */}
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-xl font-medium mb-2 "
            >
              Title
            </label>
            <input
              type="text"
              className="w-full p-2.5 rounded-full bg-gray-600 focus:ring-gray-100 border border-gray-500"
              id="task_title"
              name="task_title"
              onChange={(event)=>{
                setTask({
                  ...task,
                  title:event.target.value,
                })
              }}
              value={task.title}
            />
          </div>

          {/* task content */}
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-xl font-medium mb-2 "
            >
              Content
            </label>
            <textarea
              className="w-full p-2.5 rounded bg-gray-600 focus:ring-gray-100 border border-gray-500"
              id="task_content"
              rows={5}

               name="task_content"
              onChange={(event)=>{
                setTask({
                  ...task,
                  content:event.target.value,
                })
              }}
              value={task.content}
            />
          </div>

          {/* task status */}
          <div className="mt-4">
            <label
              htmlFor="task_status"
              className="block text-xl font-medium mb-2 "
            >
              Status
            </label>
            <select
             
              id="task_status"
              className="w-full p-2.5 rounded bg-gray-600 focus:ring-gray-100 border border-gray-500"

               name="task_status"
              onChange={(event)=>{
                setTask({
                  ...task,
                  status:event.target.value,
                })
              }}
              value={task.status}
            >
              <option value="none"  disabled>
                ---Select Status---
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* // button action */}
          <div className="mt-4 flex justify-center">
            <button className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800">
              Add Task
            </button>
            <button className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3">
              Clear
            </button>
          </div>
              {/* check the change value , title content status */}
              {/* stringify is use to convert string */}
              {
                // JSON.stringify(task)
              }

        </form>
      </div>
    </div>
  );
};

export default AddTask;
