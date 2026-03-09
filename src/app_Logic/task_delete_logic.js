import {buildtaskArrs, taskArr} from "./task_data.js";

export const deleteTask = (taskId)=>{
  const index = Number(taskId) - 1;
  taskArr.splice(index, 1);
  buildtaskArrs();
}