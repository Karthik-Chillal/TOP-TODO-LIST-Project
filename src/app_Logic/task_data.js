import { isThisMonth, isThisWeek, isToday } from "date-fns";

export const taskArr = [];
export let todayArr = [];
export let weekArr = [];
export let monthArr = [];

export const buildtaskArrs = ()=>{
  todayArr.length = 0; // clears without reassigning
  weekArr.length = 0;
  monthArr.length = 0;
  let taskId = 1;

  taskArr.forEach(task => {
    task.id  = taskId;
    if (isToday(task.dueDate))   todayArr.push(task);
    if (isThisWeek(task.dueDate)) weekArr.push(task);
    if (isThisMonth(task.dueDate)) monthArr.push(task);
    taskId+=1;
  });
}