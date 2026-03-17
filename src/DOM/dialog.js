import { saveToStorage, taskArr } from "../app_Logic/task_data.js";
import { sortTasks } from "../app_Logic/task_sort.js";
import { buildtaskArrs, todayArr, weekArr, monthArr } from "../app_Logic/task_data.js";
import { renderTasks } from "./createCard.js";

// local incremental id for new tasks
let id = 1;

// dialog and form elements
const dialog = document.querySelector(".tasks-dialog");
const form = dialog.querySelector("form");

// open dialog on all add-task buttons
const addTaskBtn = document.querySelectorAll(".add-task-btn");
addTaskBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const formBtn = document.querySelector(".form-submit-btn");
    formBtn.textContent = "Add Task";
    dialog.showModal();
  });
});

// cancel button closes the dialog
const cancelBtn = document.querySelector(".form-cancel-btn");
cancelBtn.addEventListener("click", () => {
  dialog.close();
});

// form submit handler (create + edit flows)
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // collect values from inputs
  const title = form.querySelector("#task-title").value;
  const desc = form.querySelector("#task-desc").value;
  const dueDate = form.querySelector("#task-due-date").value;
  const checked = form.querySelector("input[name='priority']:checked");
  const priority = checked ? checked.value : null;

  if (form.dataset.editId) {
    // EDIT MODE: update task in taskArr
    const editid = Number(form.dataset.editId);
    const task = taskArr.find((t) => t.id === editid);
    task.title = title;
    task.desc = desc;
    task.dueDate = dueDate;
    task.priority = priority;

    // clear edit mode flag
    delete form.dataset.editId;
  } else {
    // CREATE MODE: add new task
    taskArr.push({ id, title, desc, dueDate, priority, done: false });
    id += 1;
  }

  // close dialog and reset form
  dialog.close();
  form.reset();

  // update view + storage
  sortTasks();
  buildtaskArrs();
  saveToStorage();

  renderTasks(todayArr, document.querySelector(".today-card-container"));
  renderTasks(weekArr, document.querySelector(".week-card-container"));
  renderTasks(monthArr, document.querySelector(".month-card-container"));
});