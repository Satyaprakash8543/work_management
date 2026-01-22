import { NextResponse } from "next/server";

export async function POST(request){
    const response=NextResponse.json({
        message:"Logged out!!",
        success:true
    });
              response.cookies.set("authToken","",{
                  maxAge: 60 * 60 * 24,  //seconds × minutes × hours × days
                   // 1 day in seconds “Delete this cookie automatically after 24 hours.”
              });
              
            return response;
}