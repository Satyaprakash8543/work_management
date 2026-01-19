import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema=new Schema({
name:String,
email:{
    type:String,
    required:[true,"Email Require !!"],
    unique:true, //one email only  does not same as tow email
},
    password:{
      type:String,
      required:[true,"Password is Required !!"],

    },
    about:String,
    profileURL:String,
    // address:{
    //     street:String,
    //     city:String,
    //     conntry:String,
    //     pincode:Number
    // }

});
 
// export const User= mongoose.model.user||mongoose.model("user",UserSchema);
export const User =
  mongoose.models.user || mongoose.model("user", UserSchema);