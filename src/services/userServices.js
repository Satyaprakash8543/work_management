import { httpaxios } from "../helper/httpHelper";

export async function signUp(user){

  const result= await httpaxios.post("/api/users",user)
  .then((response)=> response.data);
  return result;
}