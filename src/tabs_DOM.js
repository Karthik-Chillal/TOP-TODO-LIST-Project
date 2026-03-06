

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
}
export const weekTab = ()=>{
  setView(weekPage);
}
export const monthTab = ()=>{
  setView(monthPage);
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




