const inquirer = require("inquirer");
const Employee = require('./Employee');



class Intern extends Employee {
  constructor(employeeLable) {
    super('intern');
    this.schoolname;

    this.internQuestions = [
      {    
        type: 'input',
        name: 'schoolname',
        message: "Enter this employee's School? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Enter this employee's School? GitHub!");
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


    this.questions = this.questions.concat(this.internQuestions);

  }

  


};

module.exports = Intern;