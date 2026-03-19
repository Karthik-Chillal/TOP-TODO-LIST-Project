import { loadFromStorage, buildtaskArrs } from "../app_Logic/task_data.js";
import { todayTab } from "./tabs_DOM.js";

// Initialize the app on page load by loading persisted tasks,
// rebuilding view-specific arrays, and switching to Today view.
loadFromStorage();
buildtaskArrs();
todayTab();
