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
            name: 'Table of Contents',
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
            name: 'Questions',
            validate: (value) => {if(value){return true} else {return "Please enter info to continue, sillly."}},
        },
        {
            type: 'input',
            message: "Email Address?",
            name: 'Quesitons',
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
    Questions,
}) => {
const template = `* ${title}

* [Description](#Description)
* [Table of Contents](#Table of Contents)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Features](#Features)
* [Questions](#Questions)

## Desctiption
${Description}
## Table of Contents
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
## Questions
* GitHub & Email ${Questions}`;

createNewFile(title, data);
});

function createNewFile(filename, template) {
    fs.writeFile(`./${filename.toLowerCast().split(' ').join('')}.md`, data, (err) => {
        if(err) {
            console.log('error')
        } else {
            console.log("README.md file has been created!");
        }
    })
}