import { taskArr } from "./task_data.js";
import { compareAsc } from "date-fns";
const priorityRank = {
  high: 0,
  medium: 1,
  low: 2
};
export const sortTasks = () =>{
  taskArr.forEach(task => {
    task.dueDate = new Date(task.dueDate);
  });
  taskArr.sort((a, b)=>{
    const dateDiff = compareAsc(a.dueDate, b.dueDate);
    if(dateDiff!=0){
      return dateDiff;
    }
    return priorityRank[a.priority] - priorityRank[b.priority];
  });
};