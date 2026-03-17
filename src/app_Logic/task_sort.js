import { taskArr } from "./task_data.js";
import { compareAsc } from "date-fns";
const priorityRank = {
  high: 0,
  medium: 1,
  low: 2
};
export const sortTasks = () => {
  taskArr.sort((a, b) => {
    // 1. move completed tasks to the end (false before true)
    const doneDiff = Number(a.done) - Number(b.done);
    if (doneDiff !== 0) return doneDiff;

    // 2. then sort by due date ascending
    const dateDiff = compareAsc(new Date(a.dueDate), new Date(b.dueDate));
    if (dateDiff !== 0) return dateDiff;

    // 3. finally sort by priority (high -> medium -> low)
    return (priorityRank[a.priority] - priorityRank[b.priority]);
  });
};