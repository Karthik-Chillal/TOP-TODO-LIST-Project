import { buildtaskArrs, saveToStorage, taskArr } from "./task_data.js";

// Remove the task by sequential ID and update all stored views.
export const deleteTask = (taskId) => {
  const index = Number(taskId) - 1;
  taskArr.splice(index, 1);
  buildtaskArrs();
  saveToStorage();
};
