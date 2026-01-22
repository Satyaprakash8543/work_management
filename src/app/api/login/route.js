import { NextResponse } from "next/server";
import { User } from "../../../models/user";
 import { connectDb } from "../../../helper/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

connectDb();
export async function POST(request) {
  const { email, password } = await request.json(); //get user(email&password)

  try {
    // 1. get user 
    const user = await User.findOne({
      email:email,
    });
     
    if(user == null){
        throw new Error("User not found!");
    }
    //2- password check  
   const matched= bcrypt.compareSync(password,user.password)
   if(!matched){
    throw new Error("Password not matched!!");
   }
   //3 generate token
    const token = jwt.sign({
    _id:user._id,
    name:user.name
   },process.env.JWT_KEY)

   //4 create nextresponce cookie
       const response=NextResponse.json({
        message:"Login success !!",
        success:true,
        user:user
       })
     //5 set token into cookies
       response.cookies.set("authToken",token,{
        maxAge: 60 * 60 * 24, //  “Delete this cookie automatically after 24 hours.seconds × minutes × hours × days
        httpOnly:true
       })

    console.log( "user data check="+user);
    console.log("Token generate verify="+ token);
    // return NextResponse.json({ //hide 5 step cookies set up
    //   message: "success",
    // });
    return response;


  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
