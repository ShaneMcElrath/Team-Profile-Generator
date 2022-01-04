const inquirer = require("inquirer");
const Employee = require('./Employee');


class Manager extends Employee {
  constructor(employeeLable) {
    super('manager');
    this.officeNumber;

    this.managerQuestions = [
      {
        type: 'input',
        name: 'officenumber',
        message: 'What is this employees office number? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter this employees office number!');
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
    

    this.questions = this.questions.concat(this.managerQuestions);
  }

  UpdateManager(employeeInfo)
  {
    this.name = employeeInfo.name;
    this.id = employeeInfo.employeeid;
    this.email = employeeInfo.email;
    this.officeNumber = employeeInfo.officenumber;
  }

  AddEngineer(newEmployee, employeeInfo)
  {
    
    newEmployee.name = employeeInfo.name;
    newEmployee.id = employeeInfo.employeeid;
    newEmployee.email = employeeInfo.email;
    newEmployee.github = employeeInfo.github;
    
    this.Engineers.push(newEmployee);
  }

  AddIntern(newEmployee, employeeInfo)
  {
    newEmployee.name = employeeInfo.name;
    newEmployee.id = employeeInfo.employeeid;
    newEmployee.email = employeeInfo.email;
    newEmployee.schoolname = employeeInfo.schoolname;

    this.Interns.push(newEmployee);
    
  }

  

};

module.exports = Manager;