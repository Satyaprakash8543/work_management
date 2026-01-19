import { httpaxios } from "../helper/httpHelper";

export async function addTask(task){
 const result= await httpaxios.post("/api/tasks",task).then((response)=>response.data);
 return result
}