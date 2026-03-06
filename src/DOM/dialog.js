import { taskArr } from "../app_Logic/task_data.js";
import { sortTasks } from "../app_Logic/task_sort.js";
let id = 1;
const dialog = document.querySelector(".tasks-dialog");
const form = dialog.querySelector("form");
const addTaskBtn = document.querySelectorAll(".add-task-btn");
addTaskBtn.forEach((btn)=>{
  btn.addEventListener("click" , ()=>{
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
  const task={id, title, desc, dueDate, priority};
  id+=1;
  dialog.close();
  taskArr.push(task);
  sortTasks();
  form.reset();
  console.log(taskArr);



})