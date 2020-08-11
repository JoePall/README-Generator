const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title: ',
    },
    {
        type: 'input',
        name: 'github',
        message: 'GitHub Username: ',
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Repository name: ',
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
        name: 'description',
        message: 'Description: ',
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
    writeFileAsync(fileName, data).then(() => {
        console.log("Readme.md written!");
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response => {
        var markdown = generateMarkdown(response);
        writeToFile("readme.md", markdown);
    });
}

// function call to initialize program
init();
