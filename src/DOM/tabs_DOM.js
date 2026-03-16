

import { renderTasks } from "./createCard.js";
import { todayArr, weekArr, monthArr } from "../app_Logic/task_data.js";

//page
const todayPage = document.querySelector(".today-page");
const weekPage = document.querySelector(".week-page");
const monthPage = document.querySelector(".month-page");

const pageArr = [todayPage, weekPage, monthPage];

//tab buttons
const todayBtn = document.querySelector(".today-btn");
const weekBtn = document.querySelector(".week-btn");
const monthBtn = document.querySelector(".month-btn");


export const btnArr = [todayBtn, weekBtn, monthBtn];

const content = document.querySelector(".main-content");

const setView = (activeView)=>{
  pageArr.forEach((p)=>{
    p.style.display="none";
    p.classList.remove("active-page")
  })

  activeView.style.display = "block";
  activeView.classList.add("active-page");
}


export const todayTab = ()=>{
  setView(todayPage);
  renderTasks(todayArr, todayPage.querySelector(".today-card-container"));
}
export const weekTab = ()=>{
  setView(weekPage);
  renderTasks(weekArr, weekPage.querySelector(".week-card-container"));
}
export const monthTab = ()=>{
  setView(monthPage);
  renderTasks(monthArr, monthPage.querySelector(".month-card-container"));
}


btnArr.forEach((btn)=>{
  btn.addEventListener("click", (e)=>{
    btnArr.forEach((b)=>{
      b.classList.remove("active-btn");
    });
    e.target.classList.add("active-btn");
    if(e.target.classList.contains("today-btn")){
      console.log(btnArr)
      todayTab();
    }
    if(e.target.classList.contains("week-btn")){
      weekTab();
    }
    if(e.target.classList.contains("month-btn")){
      monthTab();
    }
  })
})




