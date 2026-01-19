import { NextResponse } from "next/server";
import { connectDb } from "../../../helper/db";
import { Task } from "../../../models/task";



// ../tasks
// get all the 
connectDb()
export async function GET(request) {
try {
  const tasks=await Task.find();
  return NextResponse.json(tasks,{status:201})
} catch (error) {
  console.log(error);
  return NextResponse.json(
    {
      Message:"Failed to get task!!",
      abortOnSynchronousPlatformIOAccess:false
    }
  )
}
}


//create all the task
export async function POST(request) {

    const {title,content, userID}=await request.json()
  try {
      const task=new Task({
         title,
         content,
        userID,
      })

      const createdTask= task.save()
      return NextResponse.json(createdTask,{status:201})

  } catch (error) {
    console.log(error);
    return NextResponse.json({
        message:"Failed to create task!!",
        success:false,
    });
  }
}
