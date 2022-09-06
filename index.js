// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your title of this project?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'what is the description of your project?',
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'what are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'What is this project going to be used for?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who were the contributors on this project?',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'What are the instructions for testing?',
    },
    {
        type: 'input',
        name: 'gitHubUserName',
        message: 'What is your Github user name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use for this project?',
        choices: ['apache 2.0', 'MIT', 'IBM', 'ISC', 'Mozilla'],
    },
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        var template = generateMarkdown(answers);
        console.log(template);
        //function writeToFile(fileName, data) {}
        fs.writeFile('ReadME.md', template, (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log('successfully created');
            }
        });
    });
}

// Function call to initialize app
init();
