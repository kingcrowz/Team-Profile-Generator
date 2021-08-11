const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require('./src/GenerateHTML');
const fs = require('fs');

let holderArray = [];
inquirer
    .prompt([
    {
     type: 'input',
     message: 'What is the Managers name?',
     name: 'name',
     },
    {
     type: 'input',
    message: 'What is the employee ID?',
     name: 'id',
    },
    {
    type: 'input',
    message: 'Employee email?',
    name: 'email',
    },
    {
    type: 'input',
    message: 'Office Number?',
    name: 'officeNumber',
    }])
    .then((response) => {
        const newEmp = new Manager(response.name, response.id, response.email, response.officeNumber);
        console.log(newEmp);
        holderArray.push(newEmp);
        console.log(holderArray);
        Menu();
    })

    function Menu(){
        inquirer
    .prompt([
    {
     type: 'list',
     message: 'What would you like to do?',
     name: 'choice',
     choices:['add engineer', 'add intern', 'Done'],
     },])
     .then(response => {
         if(response.choice == "add engineer"){
             console.log('engineer');
             addEngineer();
         }else if(response.choice == 'add intern'){
             console.log('intern')
             addIntern();
         }else{
             console.log('done');
             writeFile(generateHTML(holderArray));
         }
     })
    }

    function addEngineer(){
        inquirer
    .prompt([
    {
     type: 'input',
     message: 'What is the Engineers name?',
     name: 'name',
     },
    {
     type: 'input',
    message: 'What is the Engineers ID?',
     name: 'id',
    },
    {
    type: 'input',
    message: 'Engineers email?',
    name: 'email',
    },
    {
    type: 'input',
    message: 'github?',
    name: 'github',
    }])
    .then((response) => {
        const newEmp = new Engineer(response.name, response.id, response.email, response.github);
        console.log(newEmp);
        holderArray.push(newEmp);
        console.log(holderArray);
        Menu();
    })
    }

    function addIntern(){
        inquirer
    .prompt([
    {
     type: 'input',
     message: 'What is the Interns name?',
     name: 'name',
     },
    {
     type: 'input',
    message: 'What is the Interns ID?',
     name: 'id',
    },
    {
    type: 'input',
    message: 'Interns email?',
    name: 'email',
    },
    {
    type: 'input',
    message: 'School?',
    name: 'school',
    }])
    .then((response) => {
        const newEmp = new Intern(response.name, response.id, response.email, response.school);
        console.log(newEmp);
        holderArray.push(newEmp);
        console.log(holderArray);
        Menu();
    })
    }




    const writeFile = data => {
        fs.writeFile('./dist/index.html', data, err => {
            if (err) {
                console.error(err);
                return;
            } else {
                console.log("Your team's profile has been successfully generated!  You can find it in the 'dist' folder.")
            }
        })
    };
    
