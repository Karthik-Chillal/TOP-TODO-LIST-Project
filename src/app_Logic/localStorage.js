import { taskArr } from "./task_data.js";

// Check if localStorage is available and writable.
// source: general best practice for storage feature detection.
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

// Report storage availability for debugging.
if (storageAvailable("localStorage")) {
  console.log("local storage working");
} else {
  console.log("local storage not working");
}

// If there are no tasks in memory yet, populate storage as a fallback.
// This block may be a placeholder for future initialization logic.
if (taskArr.length == 0) {
  populateStorage && populateStorage();
} else {
  // no-op when tasks already present
}
