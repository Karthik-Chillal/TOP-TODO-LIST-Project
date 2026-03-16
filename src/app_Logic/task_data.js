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
    const dueDate = new Date(task.dueDate); // ensure it's a Date
    if (isToday(dueDate))   todayArr.push(task);
    if (isThisWeek(dueDate)) weekArr.push(task);
    if (isThisMonth(dueDate)) monthArr.push(task);
    taskId+=1;
  });
}

export const saveToStorage = ()=>{
  localStorage.setItem("tasks", JSON.stringify(taskArr));
}

export const loadFromStorage = () =>{
  const saved = localStorage.getItem("tasks");
  if(saved){
    const parsed = JSON.parse(saved);
    parsed.forEach(task => {
      task.dueDate = new Date(task.dueDate);
      taskArr.push(task);
    });
  }
}