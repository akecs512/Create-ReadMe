import inquirer from "inquirer";
import fs from "fs";

const questions = [
    {
        name:"projectTitle",
        message: "What is your project title?"},

    {
        name:"description",
        message: "What is the description for your project?"

    },
    {
        name:"tableOfContents",
        message: "What is the table of contents for your project?"

    },
    {
        name:"installation",
        message: "How is your project installed?"

    },
    {
        name:"usage",
        message: "How is it used?"
    },
    {
        name:"credits",
        message: "Who collaborated with you?"

    },
    {
        name:"license",
        message: "What license did you use?",
        type: "list",
        choices: ["MIT", "the unlicensed", "GPL/GNU"]

    },
    {
        name:"features",
        message: "What are the features for your project?"

    },
    {
        name:"contribute",
        message: "How can someone contribute?"

    },
    {
        name:"tests",
        message: "Are there any testing instructions?"

    }
]

async function makeReadMe() {
    await inquirer.prompt (questions)
    .then((answers) => {
        console.log(answers)
        return readMeProject(answers);
    })
}


async function writeFile(fileContents){
    const readMeFile = "readMe.MD"
    fs.writeFile(readMeFile,fileContents, (error) => {if error console.log(error)})
}


function readMeProject(answers) {
    console.log( `# <Your-Project-Title>
${answers.projectTitle}

## Description
${answers.description}

## Table of Contents 
${answers.tableOfContents}
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${answers.installation}

## Usage
${answers.installation}


## Credits
${answers.credits}


## License
${answers.license}

## Features
${answers.features}

## How to Contribute
${answers.contribute}


## Tests
${answers.tests}`)

}
makeReadMe()