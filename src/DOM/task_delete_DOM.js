import { todayArr, weekArr, monthArr } from "../app_Logic/task_data.js";
import { renderTasks } from "./createCard.js";

// Re-render all list cards after a delete operation.
export const deleteCard = () => {
  renderTasks(todayArr, document.querySelector(".today-card-container"));
  renderTasks(weekArr, document.querySelector(".week-card-container"));
  renderTasks(monthArr, document.querySelector(".month-card-container"));
};
