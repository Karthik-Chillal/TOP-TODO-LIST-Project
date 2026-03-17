import { taskArr } from "./task_data.js";
import { compareAsc } from "date-fns";
const priorityRank = {
  high: 0,
  medium: 1,
  low: 2
};
export const sortTasks = () =>{
  taskArr.sort((a, b)=>{
    const dateDiff = compareAsc(new Date(a.dueDate), new Date(b.dueDate));
    if(dateDiff!=0){
      return dateDiff;
    }
    return (priorityRank[a.priority] - priorityRank[b.priority]);
  });
  taskArr.sort((a, b) => {
    taskArr.sort((a, b) =>
    (a.done - b.done) ||                                         // 1. completed goes last
    compareAsc(new Date(a.dueDate), new Date(b.dueDate)) ||      // 2. then date
    (priorityRank[a.priority] - priorityRank[b.priority])        // 3. then priority
  );
  })
};