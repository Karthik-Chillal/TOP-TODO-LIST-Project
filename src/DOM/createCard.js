import { format } from "date-fns";

const createTaskCard = (task)=>{
  const card = document.createElement("div");
  card.classList.add("task-card");

  const title = document.createElement("h3");
  title.textContent = task.title;

  const desc = document.createElement("p");
  desc.textContent = task.desc;

  const dueDate = document.createElement("p");
  dueDate.textContent = format(task.dueDate, 'PPPP');

  const priority = document.createElement("div");
  priority.textContent = task.priority;

  const buttonsDiv = document.createElement("div");
  const edit = document.createElement("button");
  edit.textContent="Edit";
  edit.classList.add("edit-btn");

  const del = document.createElement("button");
  del.textContent = 'Delete';
  buttonsDiv.append(edit, del);
  del.classList.add("del-btn");

  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(dueDate);
  card.appendChild(priority);
  card.appendChild(buttonsDiv);

  card.id = task.id;

  return card;
}


export const renderTasks = (tasks, container) => {
  container.innerHTML = "";
  tasks.forEach((task)=>{
    const card = createTaskCard(task);
    container.appendChild(card);
  });
};