import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        message:"Works api getting  data "
},{status:201,statusText:"works api"})
}