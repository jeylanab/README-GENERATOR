const inquirer = require('inquirer');
const markdownIt = require('markdown-it');
const fs = require('fs');

const md = new markdownIt();

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
    ])
    .then((data) => {
        // Construct Markdown content
        let markdownContent = `# ${data.nameOfProject}\n\n`;

        // Add selected sections to the table of contents
        data.content.forEach((section) => {
            markdownContent += `## ${section}\n\n`;
            markdownContent += `${data[section]}\n\n`;
        });

        // Write Markdown content to README.md file
        fs.writeFile("README.md", markdownContent, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('README.md file generated successfully!');
            }
        });
    })
    .catch((err) => {
        console.error(err);
    });

