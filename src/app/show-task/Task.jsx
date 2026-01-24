import React, { useContext } from "react";
import UserContext from "../../context/userContext";
import { RxCross1 } from "react-icons/rx";

const Task = ({ task,deleteTaskParent }) => {
  const { user } = useContext(UserContext);

    function deleteTask(taskId){
            deleteTaskParent(taskId);
    }

  return (
    <div
      className={` shadow-lg mt-2 rounded-md ml-2
     ${task.status === "completed" ? "bg-green-600" : "bg-gray-800"}`}
    >
      <div className="p-5">
       <div className="flex  justify-between ">
         <h1 className="text-2xl font-semibold">{task.title}</h1>
       <span onClick={()=>{
        deleteTask(task._id)
       }} className="shadow-lg bg-gray-950 hover:bg-gray-800 rounded-full w-9 h-9 flex justify-center items-center cursor-pointer"> <RxCross1 /></span>
       </div>
        <p className="font-normal">{task.content}</p>
       <div className="flex justify-between mt-3">
         <p className="text-left text-xl ">
          Status:<span className="font-bold">{task.status}</span>
        </p>
        <p className="text-right text-xl">
          Author:<span className="font-bold">{user?.name}</span>
        </p>
       </div>
      </div>
    </div>
  );
};

export default Task;
