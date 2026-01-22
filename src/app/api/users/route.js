import { NextResponse } from "next/server";
import { connectDb } from "../../../helper/db";
import { User } from "../../../models/user";
import bcrypt from "bcryptjs";

connectDb();
// http://localhost:3000/api/users
// get request function

// export function GET() {
//   //     const user={
//   //         name:"Prakash",
//   //         email:"prakash@gmail.com",
//   //         password:"12345",
//   //         phone:"235566"
//   //  }
//   const users = [
//     {
//       name: "prakash",
//       email: "prakash@gmail.com",
//       course: "Next js",
//     },
//     {
//       name: "Shivansh",
//       email: "shiv@gmail.com",
//       course: "React js",
//     },
//     {
//       name: "Mohit",
//       email: "mohit@gmail.com",
//       course: "java",
//     },
//   ];

//   return NextResponse.json(
//     { Message: "This is get response", users },
//     { status: 200 }
//   );
// }

// // post request function data post
// // localhost:3000/api/users
// export async function POST(request) {
//   const body = request.body;
//   console.log("This is body", body);
//   // console.log("Request method:" ,request.method);
//   //  console.log("Cookies",request.cookies);
//   //   console.log("Header",request.headers);

// //   Send data postman json formate and access data console
//    const jsondata  = await request.json()
//    console.log(jsondata)

//   //Send data postman text formate and access data console
//   //  const textdata  = await request.text();
//   //  console.log(textdata)

//   return NextResponse.json({
//     message: "posting user data",
//   });
// }


// // delete request function
// export function DELETE() {
//   console.log("Delete api called");
//   return NextResponse.json(
//     {
//       Message: "deleted !!",
//       status: true,
//     },
//     { status: 201, statusText: "hey change the text" }
//   );
// }

// export function PUT() {}


// Create user
export async function POST(request) {
  // Fetch user detail from request
  const{name,email,password,about ,profileURL}=await request.json()
  // create user object with user model

 const user =new User({
    name,
    email,
    password,
    about ,
    profileURL
  });

try {
  // save the object to database
    user.password= bcrypt.hashSync(user.password,
     parseInt( process.env.BCRYPT_SALT))
    const createdUser=await user.save();
    const response=NextResponse.json( createdUser,{status:201})
    return response
  
  
} catch (error) {
  console.log(error)
  return NextResponse.json({
    message:"Failed to create user !!",
    status:false,
  },{
    status:500
  })
}
}

//get user
export async function GET(request) {
  let users=[];
  try {
    
    users=await User.find().select("-password"); //password not show postman
  } catch (error) {
    return NextResponse.json({
      message:"failed to get users",
      success:false,
    })
  }
  return NextResponse.json(users)
}