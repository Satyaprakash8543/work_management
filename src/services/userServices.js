import { httpaxios } from "../helper/httpHelper";

export async function signUp(user){

  const result= await httpaxios.post("/api/users",user)
  .then((response)=> response.data);
  return result;
}

export async function login(loginData) {
  
  const result = await httpaxios.post("/api/login",loginData).then((response)=>response.data);
  return result;
}