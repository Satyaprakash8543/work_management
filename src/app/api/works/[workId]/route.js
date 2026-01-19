import { NextResponse } from "next/server";

export async function DELETE(request ,{params}){
     
    const praramsvalue=await params;
    console.log("Paramsvalue=",praramsvalue)

    const {workId}=  await params;
    console.log("Works ID",workId);
   return NextResponse.json({
    "Message":"testing delete"
   },{status:201, statusText:"Create dynamic api"})
}