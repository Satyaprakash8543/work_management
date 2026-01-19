import { NextResponse } from "next/server";
import { User } from "../../../../models/user";

//get users
export const GET= async(request,{params})=>{
  
   try {
     const {userId}=await params  ;
     const user = await User.findById(userId);
     return NextResponse.json(user,{status:201})

   } catch (error) {
          return NextResponse.json({
            message:"Error in get user !!",
            success:false,
           }) 
   }    
}



//delete users
export async function DELETE(request,{params}){
    
    const {userId}= await params;

    try {
        await User.deleteOne({
            _id: userId,
        });

        return NextResponse.json({
            message:"User deleted !!",
            success:true,
        });
    } catch (error) {
           return NextResponse.json({
            message:"Error in deleting user !!",
            success:false,
           })   
    }
}

// update user id

export const PUT= async(request,{params})=>{

        const {userId}=await params;
        const {name,password,about,profileURL}= await request.json();
    try {
       const user = await User.findById(userId)
        user.name=name;
        user.about=about;
        user.password=password; 
        user.profileURL=profileURL
        // add more information

        const updateUser= await user.save();
        return NextResponse.json(updateUser,{status:201})

        }

        
    catch (error) {
        return NextResponse.json({
            massage:"Failed to update user !!",
            status:false,
        })
    }
}