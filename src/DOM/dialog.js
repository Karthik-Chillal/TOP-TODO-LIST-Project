

const dialog = document.querySelector(".tasks-dialog");
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