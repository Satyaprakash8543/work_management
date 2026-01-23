import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "../../../models/user";


//Handle login data current user

export async function GET(request) {
  const authToken = await request.cookies.get("authToken")?.value;
  console.log(authToken); //check token acsses
  const data = jwt.verify(authToken, process.env.JWT_KEY); //Acsses login user data
  //  console.log(data);
  try {
    const user = await User.findById(data._id).select("-password"); //Acsses data inside user id and use select("-password"); remove password

    return NextResponse.json(user, {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to create user !!",
      status: false,
    });
  }
}
