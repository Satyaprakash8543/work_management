import { NextResponse } from "next/server";
import { Task } from "../../../../../models/task"
import { connectDb } from "../../../../../helper/db";


connectDb()
//localhost:3000/api/users/[userid]/tasks
export async function GET(request,{params}){
  const {userId}=await params
  try {
  const tasks= await Task.find({
        userId:userId,
    });
    return NextResponse.json(tasks)
  } catch (error) {
    console.log(error);
    return NextResponse.json({
        message:"Failed to get task",
        success:false
    })
  }
}