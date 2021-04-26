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
            message: "Licenses",
            name: 'License',
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
            name: 'Questions',
            validate: (value) => {if(value){return true} else {return "Please enter info to continue, sillly."}},
        }
    ]
)