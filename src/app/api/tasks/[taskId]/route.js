import { NextResponse } from "next/server";
import { connectDb } from "../../../../helper/db";
import { Task } from "../../../../models/task";

connectDb()
// api/task/{taskid}
export async function GET(request,{params}){
  
    const{taskId}=await params;
   try {
      const task= await Task.findById(taskId)
      return NextResponse.json(task,{status:201})
   } catch (error) {
      console.log(error);
      return NextResponse.json({
        Message:"Failed to task!!",
        success:false,
      })
   }

}




export async function PUT(request,{params}){
    try {
        const{taskId}=await params
        const{title,content,status}=await request.json(); //update data in json form to postman inside
        let task=await Task.findById(taskId); //find data to database throw id
        task.title=title, 
        task.content=content,
        task.status=status

       const updatedTask=await task.save(); //save data to update new data
       return NextResponse.json(updatedTask,{status:201})


    } catch (error) {
        console.log(error);
        return NextResponse.json({
        Message:"Failed to update task!!",
        success:false,
      })
    }

}

export async function DELETE(request,{params}){

    try {
        const{taskId}=await params;
        const deletedTask= await Task.deleteOne({
            _id:taskId
        })
        return NextResponse.json({
           "message":"Task Deleted !!",
           status:201 
        })

        
    } catch (error) {
         console.log(error);
        return NextResponse.json({
        Message:"Failed to deleted task!!",
        success:false,
      })
    }
}