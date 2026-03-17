import { deleteTask } from "../app_Logic/task_delete_logic.js";
import { deleteCard } from "./task_delete_DOM.js";
import { buildtaskArrs, saveToStorage, taskArr, todayArr, weekArr, monthArr } from "../app_Logic/task_data.js";
import { formatISO9075 } from "date-fns";
import { renderTasks } from "./createCard.js";
import { sortTasks } from "../app_Logic/task_sort.js";

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("del-btn")) {
    const delId = e.target.dataset.id;
    deleteTask(delId);
    deleteCard();
  }
});
const form = document.querySelector("form");
const dialog = document.querySelector(".tasks-dialog");
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    const id = Number(e.target.dataset.id);
    const task = taskArr.find(t => t.id === id);

    // pre-fill the form
    form.querySelector("#task-title").value = task.title;
    form.querySelector("#task-desc").value = task.desc;
    const result = formatISO9075(task.dueDate, { representation: 'date' })
    form.querySelector("#task-due-date").value = result;
    form.querySelector(`input[value="${task.priority}"]`).checked = true;

    // store the id so submit knows which task to update
    form.dataset.editId = id;
    const formBtn = form.querySelector(".form-submit-btn");
    formBtn.textContent = "Edit";
    console.log(formBtn);

    dialog.showModal();

  }
});


// Event Listener for complete button:
document.addEventListener("click", (e) => {
  if(e.target.classList.contains("done-btn")){
    const id = Number(e.target.dataset.id);
    const task = taskArr.find((t)=> t.id === id);
    task.done = !task.done;
    saveToStorage();
    sortTasks();
    buildtaskArrs();
    renderTasks(todayArr, document.querySelector(".today-card-container"));
    renderTasks(weekArr, document.querySelector(".week-card-container"));
    renderTasks(monthArr, document.querySelector(".month-card-container"));
  }
})