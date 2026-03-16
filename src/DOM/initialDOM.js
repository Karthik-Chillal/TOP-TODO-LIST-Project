import { loadFromStorage, buildtaskArrs } from "../app_Logic/task_data.js";
import { todayTab } from "./tabs_DOM.js";

loadFromStorage();
buildtaskArrs();
todayTab();