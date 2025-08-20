// app.js
// This is the main entry point of the CLI Todo App

// Importing necessary modules
const { ask, rl } = require("./src/ask.js");
const { loadTasks } = require("./src/fs.js");
const {
  addTask,
  viewTasks,
  completeTask,
  deleteTask,
  exitApp,
  help,
} = require("./src/control.js");

// Displaying a welcome message
console.log("----------------------------------------");
console.log("----- Welcome to the CLI Todo App! -----");
console.log(
  "Manage your tasks efficiently with this command-line application."
);
console.log("----------------------------------------\n");

// Main function to handle user commands
// This function will run in a loop until the user decides to exit
// It will prompt the user for commands and execute the corresponding functions
// The tasks will be loaded from the data.json file at the start
// The user can add, view, complete, delete tasks or exit the application
// The help command will display available commands to the user
async function main() {
  // Load existing tasks from the file
  let tasks = loadTasks();

  // Loop to handle user commands
  // The loop will continue until the user chooses to exit
  // It will prompt the user for a command and execute the corresponding function
  // If the command is not recognized, it will prompt the user again
  while (true) {
    // Prompt the user for a command
    // The command can be 'add', 'view', 'completed', 'delete', 'exit', or 'help'
    // Based on the command, the corresponding function will be called
    const cmd = await ask("Add/View/Completed/Delete/Exit/Help? ");

    // Check the command and call the corresponding function
    if (cmd.toLowerCase() === "add") {
      const task = await ask("Enter task: ");
      addTask(tasks, task); // Add a new task
    } else if (cmd.toLowerCase() === "view") {
      viewTasks(tasks); // View all tasks
    } else if (cmd.toLowerCase() === "completed") {
      const index = await ask("Enter task number to completed: ");
      completeTask(tasks, index); // Complete a specific task
    } else if (cmd.toLowerCase() === "delete") {
      const index = await ask("Enter task number to delete: ");
      deleteTask(tasks, index); // Delete a specific task
    } else if (cmd.toLowerCase() === "exit") {
      exitApp(rl); // Exit the application
      break; // Break the loop to exit the application
    } else if (cmd.toLowerCase() === "help") {
      help(); // show help information
    }
  }
}

// Start the application by calling the main function
// This will initiate the command loop and allow the user to interact with the application
main();
