import { format } from "date-fns";

// internal helper: build a task card element for DOM insertion
const createTaskCard = (task) => {
  const card = document.createElement("div");
  card.id = task.id;
  card.classList.add("task-card");
  if (task.done) card.classList.add("task-completed");

  // title
  const title = document.createElement("h3");
  title.textContent = task.title;


  // description
  const desc = document.createElement("p");
  desc.textContent = task.desc;

  // due date formatted with date-fns
  const dueDate = document.createElement("p");
  dueDate.textContent = format(task.dueDate, "PPPP");

  // priority label
  const priority = document.createElement("div");
  priority.textContent = task.priority;

  // action buttons container
  const buttonsDiv = document.createElement("div");

  // edit button
  const edit = document.createElement("button");
  edit.textContent = "Edit";
  edit.classList.add("edit-btn");
  edit.dataset.id = task.id;

  // delete button
  const del = document.createElement("button");
  del.textContent = "Delete";
  del.classList.add("del-btn");
  del.dataset.id = task.id;

  // done button
  const doneBtn = document.createElement("button");
  doneBtn.textContent = task.done ? "✓ Done" : "Mark Complete";
  doneBtn.classList.add("done-btn");
  doneBtn.dataset.id = task.id;

  buttonsDiv.append(edit, del, doneBtn);

  // assemble card
  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(dueDate);
  card.appendChild(priority);
  card.appendChild(buttonsDiv);

  return card;
};

// public renderer: wipe and re-render a list of tasks into a container
export const renderTasks = (tasks, container) => {
  container.innerHTML = "";

  tasks.forEach((task) => {
    const card = createTaskCard(task);
    container.appendChild(card);
  });
};