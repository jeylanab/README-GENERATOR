const inquirer = require('inquirer');
const markdownIt = require('markdown-it');
const fs = require('fs');



inquirer
.prompt([
    {
        type: 'input',
        name: 'nameOfProject',
        message: 'What is the title of your project?',
    },
    {
        type: 'checkbox',
        message: 'Table of Contents',
        name: 'content',
        choices: ['Description', 'Installation', 'Usage', 'License', 'Contributing'],
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a brief description of your project:',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'How should users install your project?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How can users use your project?',
    },
    {
        type: 'input',
        name: 'License',
        message: 'Specify the license for your project (e.g., MIT):',
        default: 'MIT',
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'How can others contribute to your project?',
    },



]).then((data) => {
    
    
    fs.writeFile("README.md", JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
   


    
}).catch((err) => {
    
});

