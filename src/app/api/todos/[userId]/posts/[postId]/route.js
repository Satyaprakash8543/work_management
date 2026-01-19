import { NextResponse } from "next/server";

export async function GET(request,{params}){
    
    const Storeparams=await params
    console.log("Storeparams value",Storeparams);

    const{userId,postId}=await params;
    console.log("UserId", userId)
    console.log("PostId", postId)
    return NextResponse.json({userId,postId})
}
