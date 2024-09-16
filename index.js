// iggys4ur: Walled-Sandbox/TaskScheduler/index.js
// Project: README Generator

// Step 1: Include packages needed for this application
const fs = require('fs');
const path = require('path'); // To manage file paths
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown'); // Function to generate README content

// Step 2: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license does your project have?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
    },
    {
        type: 'input',
        name: 'repoURL',
        message: 'Provide the URL of your project repository (leave blank if none):',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for contributing to this project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions for the project:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Provide your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide your email address:',
    },
];

// Step 3: Create a function to write the README file
function writeToFile(fileName, data) {
    // Create the 'out' directory if it doesn't exist
    const outputDir = path.join(__dirname, 'out');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    // Write the file to the 'out' directory
    const filePath = path.join(outputDir, fileName);
    fs.writeFile(filePath, data, (err) =>
        err ? console.log(err) : console.log(`Successfully created ${fileName} in ./out!`)
    );
}

// Step 4: Create a function to initialize the app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const markdown = generateMarkdown(answers); // Generate markdown using answers
            writeToFile('README.md', markdown); // Write to 'out/README.md'
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app
init();
