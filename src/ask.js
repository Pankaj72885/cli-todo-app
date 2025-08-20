// src/ask.js
// This module handles user input through the command line

// Importing necessary modules
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(query) {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
}

// Exporting the ask function and readline interface for use in other modules
module.exports = { ask, rl };
