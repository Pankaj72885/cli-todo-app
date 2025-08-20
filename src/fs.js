// src/fs.js
// This module handles reading and writing tasks to a JSON file

// File system module to interact with the file system
const fs = require("fs");

// Check if the data file exists, if not create an empty array
if (!fs.existsSync("./db/data.json")) {
  fs.writeFileSync("./db/data.json", JSON.stringify([]));
}

// Read tasks from file
function loadTasks() {
  // If the file does not exist, return an empty array
  if (!fs.existsSync("./db/data.json")) {
    return [];
  }
  // Read the file and parse the JSON data
  const data = fs.readFileSync("./db/data.json");
  return JSON.parse(data);
}

// Write tasks to file
function saveTasks(tasks) {
  fs.writeFileSync("./db/data.json", JSON.stringify(tasks, null, 2));
}

// Exporting the loadTasks and saveTasks functions for testing purposes
module.exports = { loadTasks, saveTasks };
