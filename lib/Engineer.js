const inquirer = require("inquirer");
const Employee = require('./Employee');


class Engineer extends Employee {
  constructor(employeeLable) {
    super('engineer');
    this.github;
    this.engineerQuestions = [
      {    
        type: 'input',
        name: 'github',
        message: "Enter this employee's GitHub? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter employee's GitHub!");
            return false;
          }
        }
      },
      {    
        type: 'confirm',
        name: 'addNewEmployee',
        message: "Do you want to add another employee?",
        default: false
      },
      {    
        type: 'list',
        name: 'blnIsEngineer',
        message: "What type of employee do you want to add?",
        choices: [
          'Engineer',
          'Intern'
        ],
        default: 'Engineer'
      }
    ];

    this.questions = this.questions.concat(this.engineerQuestions);

  }

};

module.exports = Engineer;