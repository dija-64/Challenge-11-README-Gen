const fs = import("fs");
const path = import("path");
const inquirer = import("inquirer");
const generateMarkdown = import("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter title project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter short description explaining the project.',
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: '(Optional) - Add table of contents if README is long.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation - What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage - Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Credits - List collaborators & Github profiles, third-party assets and/or links to tutorials used',
    },
    {
        type: 'input',
        name: 'license',
        message: 'License - Add license.',
        choices: ["MIT", "GNU AGPLv3", "Apache", "Mozilla Public License", "None"]
    },
];



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) {
            return console.log(err);
        }

        console.log("A README.md file for your project has been created.")
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (response) {
        console.log(response);
        writeToFile(`${response.title}.md`, response);
    });
}


// function call to initialize program
init();
