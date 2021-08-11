const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

let made = 0;
class Employee {

    constructor() {
        this.continue = true;
    }

    start() {
        if(made == 0){
            inquirer
            .prompt([
            {
             type: 'input',
             message: 'What is the employees name?',
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
                 type: 'list',
                 message: 'Employee type?',
                 name: 'type',
                 choices: ['Manager'],
             }
        ])
        made++;
        } else {
            inquirer
            .prompt([
            {
             type: 'input',
             message: 'What is the employees name?',
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
                 type: 'list',
                 message: 'Employee type?',
                 name: 'type',
                 choices: ['Manager', 'Engineer', 'Intern'],
             }
        ])
        made++;
        }
    
    }
}

module.exports = Employee;