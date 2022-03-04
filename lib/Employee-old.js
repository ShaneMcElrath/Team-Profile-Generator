const inquirer = require("inquirer");




class Employee {
  constructor(employeeLable) {
    this.name;
    this.id;
    this.email;
    this.Engineers=[];
    this.Interns=[];
  

    if (!employeeLable) {
      this.employeeLable = 'employee';
    }
    else {
      this.employeeLable = employeeLable;
    }
    //Base set of questions to promt user on the command line.
    this.questions = [
      {
        type: 'input',
        name: 'name',
        message: `What is this ${this.employeeLable}s name? (Required)`,
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter the managers name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'employeeid',
        message: 'Enter this employees ID? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter employee ID!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is this employees email? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter this employees email!');
            return false;
          }
        }
      }
    ];
  }



  promtQuestions(manager) { 
    
    return inquirer.prompt(this.questions)
      .then(employeeData => {

        //If manager data save manager data
        if (employeeData.officenumber) {
          this.UpdateManager(employeeData);
        }
        //if engineer data save engineer data
        else if (employeeData.github) {
          
          manager.AddEngineer(this, employeeData);
        }
        //if intern data save intern data
        else if (employeeData.schoolname) {
          
          manager.AddIntern(this, employeeData);
        }

        
        if (employeeData.addNewEmployee) {
          if (employeeData.blnIsEngineer == 'Engineer') {
            let newEmployee = new Engineer();
            return newEmployee.promtQuestions(manager);
          }
          else {
            let newEmployee = new Intern();
            return newEmployee.promtQuestions(manager);
          }
        }
        else {
          return (employeeArr);
        }
            
    });  
  }

};

