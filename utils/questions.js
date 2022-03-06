

const questions = {
  baseQuestions: [],

  addEmployeeQuestion: [
    {    
      type: 'confirm',
      name: 'addNew',
      message: "Do you want to add another employee?",
      default: false
    }
  ],

  employeeRoleQuestion: [
    {    
      type: 'list',
      name: 'employeeType',
      message: "What type of employee do you want to add?",
      choices: [
        'Engineer',
        'Intern'
      ],
      default: 'Engineer'
    }
  ],

  managerQuestion: [
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is this managers office number? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter this managers office number!');
          return false;
        }
      }
    }
  ],

  engineerQuestion: [
    {    
      type: 'input',
      name: 'github',
      message: "Enter this engineers GitHub? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter engineers GitHub!");
          return false;
        }
      }
    }
  ],

  internQuestions: [
    {    
      type: 'input',
      name: 'school',
      message: "Enter this interns School? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Enter this interns School? GitHub!");
          return false;
        }
      }
    }
  ],


  updateQuestions(employeeLable) {
    this.baseQuestions = [
      {
        type: 'input',
        name: 'name',
        message: `What is this ${employeeLable}s name? (Required)`,
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Please enter the ${employeeLable}s name!`);
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: `Enter this ${employeeLable}s ID? (Required)`,
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Please enter ${employeeLable}s ID!`);
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: `What is this ${employeeLable}s email? (Required)`,
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Please enter this ${employeeLable}s email!`);
            return false;
          }
        }
      }
    ];
  } 
}

module.exports = questions;