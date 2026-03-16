import { saveToStorage, taskArr } from "../app_Logic/task_data.js";
import { sortTasks } from "../app_Logic/task_sort.js";
import { buildtaskArrs, todayArr, weekArr, monthArr } from "../app_Logic/task_data.js";
import { renderTasks } from "./createCard.js";
let id = 1;
const dialog = document.querySelector(".tasks-dialog");
const form = dialog.querySelector("form");
const addTaskBtn = document.querySelectorAll(".add-task-btn");
addTaskBtn.forEach((btn)=>{
  btn.addEventListener("click" , ()=>{
    const formBtn = document.querySelector(".form-submit-btn");
    formBtn.textContent = "Add Task";
    dialog.showModal();
  })
});
const cancelBtn = document.querySelector(".form-cancel-btn");
cancelBtn.addEventListener("click", ()=>{
  dialog.close();
})


// input values here:
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const title = form.querySelector("#task-title").value;
  const desc = form.querySelector("#task-desc").value;
  const dueDate = form.querySelector("#task-due-date").value;
  const checked = form.querySelector("input[name='priority']:checked");
  const priority = checked ? checked.value : null;
  // const task={id, title, desc, dueDate, priority};
  // const taskBtn = document.querySelector(".form-submit-btn");

  if (form.dataset.editId) {
    // ✅ EDIT MODE — update existing task
    const editid   = Number(form.dataset.editId);
    const task = taskArr.find(t => t.id === editid);
    task.title    = title;
    task.desc     = desc;
    task.dueDate  = dueDate;
    task.priority = priority;
    task.done = false;
    delete form.dataset.editId; // ✅ clear edit mode after done
    // console.log(task.dueDate);

  } else {
    // ✅ CREATE MODE — push new task
    taskArr.push({ id, title, desc, dueDate, priority, done });
    id += 1;
  }
  dialog.close();
  sortTasks();
  form.reset();
  buildtaskArrs();
  saveToStorage();
  // console.log
  renderTasks(todayArr, document.querySelector(".today-card-container"));
  renderTasks(weekArr, document.querySelector(".week-card-container"));
  renderTasks(monthArr, document.querySelector(".month-card-container"));






})