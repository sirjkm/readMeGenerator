const inquirer = require('inquirer')
const fs = require('fs')
const { title } = require('process')

inquirer.prompt (
    [
        {
            type: 'input',
            message: "Project Title?",
            name: 'Title',
            validate: (value) => {if(value){return true} else {return "Please enter info to continue, sillly."}},
        },
        {
            type: 'input',
            message: "Enter a Short Description.",
            name: 'Description',
            validate: (value) => {if(value){return true} else {return "Please enter info to continue, sillly."}},
        },
        {
            type: 'input',
            message: "Table of Contents",
            name: 'Table_of_Contents',
            validate: (value) => {if(value){return true} else {return "Please enter info to continue, sillly."}},
        },
        {
            type: 'input',
            message: "How do you Install?",
            name: 'Installation',
            validate: (value) => {if(value){return true} else {return "Please enter info to continue, sillly."}},
        },
        {
            type: 'input',
            message: "Explain the Usage?",
            name: 'Usage',
            validate: (value) => {if(value){return true} else {return "Please enter info to continue, sillly."}},
        },
        {
            type: 'input',
            message: "License",
            name: 'License',
            choice: ['Apache', 'MIT', 'Mozilla', 'GPL', 'GNU', 'N/A'],
            validate: (value) => {if(value){return true} else {return "Please enter info to continue, sillly."}},
        },
        {
            type: 'input',
            message: "Who'd You Collab With?",
            name: 'Contributing',
            validate: (value) => {if(value){return true} else {return "Please enter info to continue, sillly."}},
        },
        {
            type: 'input',
            message: "Explain Some of the Features",
            name: 'Features',
            validate: (value) => {if(value){return true} else {return "Please enter info to continue, sillly."}},
        },
        {
            type: 'input',
            message: "GitHub Profile Name?",
            name: 'GitHub',
            validate: (value) => {if(value){return true} else {return "Please enter info to continue, sillly."}},
        },
        {
            type: 'input',
            message: "Email Address?",
            name: 'Email',
            validate: (value) => {if(value){return true} else {return "Please enter info to continue, sillly."}},
        }
    ]
).then(({
    Title,
    Description,
    Table_of_Contents,
    Installation,
    Usage,
    License,
    Contributing,
    Features,
    GitHub,
    Email,
}) => {
const template = `* ${Title}

* [Description](#Description)
* [Table_of_Contents](#Table_of_Contents)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Features](#Features)
* [GitHub](*GitHub)
* [Email](*Email)

## Desctiption
${Description}
## Table_of_Contents
${Table_of_Contents}
## Installation
${Installation}
## Usage
${Usage}
## License
${License}
## Contributing
${Contributing}
## Features
${Features}
## GitHub
${GitHub}
## Email
${Email}`;

createNewFile(title, template);
});

function createNewFile(filename, template) {
    fs.writeFile("README.md", template, (err) => {
        if(err) {
            console.log('error')
        } else {
            console.log("README.md file has been created!");
        }
    })
}