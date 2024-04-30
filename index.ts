#!/usr/bin/env node
import inquirer from "inquirer";

// 1) Computer will Generate A Random Number -Done 

// 2) User Input For Guessing Number - Done

// 3) Compare user input with computer generated number and show results

const randomNumber = Math.floor(Math.random()*6+1);

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number between 1-6:",
  },
]);

console.log("answers");


if (answers.userGuessedNumber === randomNumber) {
  console.log("Congratulations! You guessed the correct number.")
} else {
  console.log(`Sorry, your guess was incorrect.`);
};