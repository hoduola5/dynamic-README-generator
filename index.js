const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid GitHub username is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is the name of your GitHub repo?",
    name: "repo",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid GitHub repo is required for a badge.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid project title is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Write a description of your project.",
    name: "description",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid project description is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message:
      "Describe the steps required to install your project for the Installation section.",
    name: "installation",
  },
  {
    type: "input",
    message:
      "Provide instructions and examples of your project in use for the Usage section.",
    name: "usage",
  },
  {
    type: "input",
    message:
      "Provide guidelines on how other developers can contribute to your project.",
    name: "contributing",
  },
  {
    type: "input",
    message:
      "Provide any tests written for your application and provide examples on how to run them.",
    name: "tests",
  },
  {
    type: "list",
    message: "Choose a license for your project.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
    name: "license",
  },
];

// store the type of file to be generated in a variable
const fileName = "README.md";

// function to write README file
const writeToFile = (fileName, data) => {
  console.log(data);

  // To store generateMarkdown in a variable
  const READMETemplate = generateMarkdown(data);

  fs.writeFile(fileName, READMETemplate, (error) =>
    error ? console.error(error) : console.log(`Success!`)
  );
};

// function to initialize program
const init = () => {
  // Calling inquirer to prompt the user quesions about the README file to be generated.
  inquirer.prompt(questions).then((data) => {
    writeToFile(fileName, data);
  });
};

// function call to initialize program
init();
