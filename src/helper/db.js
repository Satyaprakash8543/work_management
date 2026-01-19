import mongoose from "mongoose"
import { User } from "../models/user";

export const connectDb= async()=>{
try {
   const {connection}=await mongoose.connect(process.env.MONGODB_URI,{
     dbName:"work_manager"   
    })
    console.log("db connected...");
    // console.log("connected with host= ",connection.host);
    // console.log(connection)

    //testing and creating new user
    // const uuser =new User({
    //     name:"test",
    //     email:"test@gmail.com",
    //     password:"testingpassword",
    //     about:"this is testing"
    // });
    // await uuser.save();

    console.log("user is created");
} catch (error) {
    console.log("failed to connect with database");
    console.log(error);
}
}