

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
  try {
    const title = form.querySelector("#task-title").value;
    const desc = form.querySelector("#task-desc").value;
    const dueDate = form.querySelector("#task-due-date").value;
    const checked = form.querySelector("input[name='priority']:checked");
    const priority = checked ? checked.value : null;
    console.log({title, desc, dueDate, priority});
  }
  catch(err){
    console.log(err);
  }
  dialog.close();


})