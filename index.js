const inquirer = require('inquirer')
const fs = require('fs')
const { title } = require('process')

inquirer.prompt (
    [
        {
            type: 'input',
            message: "Project Title?",
            name: title,
            validate: (value) => {if(value){return true} else {return "Please enter info to continue, sillly."}},
        },
        {
            type: 'input',
            message: "Enter a Short Description.",
            validate: (value) => {if(value){return true} else {return "Please enter info to continue, sillly."}},
        },
        {
            type: 'input',
            message: "How do you Install?",
            validate: (value) => {if(value){return true} else {return "Please enter info to continue, sillly."}},
        },
        {
            type: 'input',
            message: "Explain Usage?",
            validate: (value) => {if(value){return true} else {return "Please enter info to continue, sillly."}},
        },
        {
            type: 'input',
            message: "Who'd You Collab With?",
            validate: (value) => {if(value){return true} else {return "Please enter info to continue, sillly."}},
        },
        {
            type: 'input',
            message: "Explain Some of the Features",
            validate: (value) => {if(value){return true} else {return "Please enter info to continue, sillly."}},
        }
    ]
)