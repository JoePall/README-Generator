const fs = require('fs');
const { prompt } = require('inquirer');
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown');
import { generateMarkdown } from "generateMarkdown";

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title: ',
    },
    {
        type: 'editor',
        name: 'description',
        message: 'Description: ',
    },
    {
        type: 'editor',
        name: 'tableOfContents',
        message: 'Table of Contents: ',
    },
    {
        type: 'editor',
        name: 'installation',
        message: 'Installation: ',
    },
    {
        type: 'editor',
        name: 'usage',
        message: 'Usage: ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License: ',
        choices: [
            'None',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2 - Clause "Simplified" License',
            'BSD 3 - Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense',
        ],
    },
    {
        type: 'editor',
        name: 'contributing',
        message: 'Contributing: ',
    },
    {
        type: 'editor',
        name: 'tests',
        message: 'Tests: ',
    },
    {
        type: 'editor',
        name: 'questions',
        message: 'Questions: ',
    },
];

// function to write a file
function writeToFile(fileName, data) {
    console.log("writeToFile: started");

    writeFileAsync(fileName, data).then(() => {
        console.log("Finished!");
    });
    
    console.log("writeToFile: ended");
}

// function to initialize program
function init() {
    console.log("init: started");

    prompt(questions).then(response => {
        var markdown = generateMarkdown(response);
        console.log(markdown);
        writeToFile("readme.md", markdown);
    });

    console.log("init: ended");
}

// function call to initialize program
init();
