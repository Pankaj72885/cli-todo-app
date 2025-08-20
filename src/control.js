// src/control.js
// This module handles the main logic of the CLI Todo App

// Importing necessary modules
const { saveTasks } = require("./fs.js");

// Function to add a new task
// Adds a new task to the tasks array and saves it to the file
// The task is an object with a 'task' property and a 'done' status
function addTask(tasks, task) {
  tasks.push({ task, done: false });
  saveTasks(tasks);
  console.log("✅ Task Added!");
}

// Function to view all tasks
// Displays the list of tasks with their status
// Each task is displayed with its index, task description, and completion status
// If there are no tasks, it informs the user
function viewTasks(tasks) {
  console.log("\n📋 Your Tasks:");
  tasks.forEach((t, i) => {
    console.log(`${i + 1}. ${t.task} [${t.done ? "✔" : "❌"}]`);
  });
}

// Function to mark a task as completed
// Takes the index of the task to be completed, marks it as done, and saves the tasks
// If the index is invalid, it informs the user
function completeTask(tasks, index) {
  const i = parseInt(index) - 1;
  if (i >= 0 && i < tasks.length) {
    tasks[i].done = true;
    saveTasks(tasks);
    console.log("✔ Task Completed!");
  } else {
    console.log("⚠ Invalid number!");
  }
}

// Function to delete a task
// Takes the index of the task to be deleted, removes it from the tasks array, and saves the tasks
// If the index is invalid, it informs the user
function deleteTask(tasks, index) {
  const i = parseInt(index) - 1;
  if (i >= 0 && i < tasks.length) {
    tasks.splice(i, 1);
    saveTasks(tasks);
    console.log("🗑 Task Deleted!");
  } else {
    console.log("⚠ Invalid number!");
  }
}

// Function to exit the application
// Closes the readline interface and exits the application
// Displays a goodbye message to the user
function exitApp(rl) {
  console.log("\nGoodbye!");
  console.log("Thank you for using the CLI Todo App!");
  console.log("See you next time! \n");
  rl.close();
}

// Function to display help information
// Lists all available commands and their descriptions
// Informs the user how to use the application effectively
function help() {
  console.log("\nAvailable commands:");
  console.log("1. Add - Add a new task");
  console.log("2. View - View all tasks");
  console.log("3. Completed - Mark a task as completed");
  console.log("4. Delete - Delete a task");
  console.log("5. Exit - Exit the application");
  console.log("6. Help - Show this help message");
  console.log("\nType the command you want to execute.");
  console.log("Example: 'Add' to add a task, 'View' to view tasks, etc.");
  console.log("\nEnjoy managing your tasks! \n");
}

// Exporting the functions for use in other modules
// These functions will be used in app.js to handle user commands
module.exports = {
  addTask,
  viewTasks,
  completeTask,
  deleteTask,
  exitApp,
  help,
};
