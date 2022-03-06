
const {writeFile, copyFile} = require('./utils/generate-site');
const promptQuetions = require('./utils/prompt-questions');
const cardTemplate = require('./src/card-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let main = async function() {
  let employeeInfo = [];

  // Prompts user with questions about the manager then returns their answer.
  let managerInfo = await promptQuetions.managerPrompt()

  // Creates new manager object.
  let manager = new Manager(managerInfo);

  // Adds manager object to array.
  employeeInfo.push(manager);

  // Asks user if they want to add another employee.
  let addNew = await promptQuetions.addEmployeePrompt();


  while(addNew) {
    let employeeType = promptQuetions.employeeRolePrompt();

    if (employeeType == Engineer) {

    }
    else {

    }

    addNew = await promptQuetions.addEmployeePrompt();

    addNew = false;
  }

  let cardData = cardTemplate(employeeInfo);
  writeFile(cardData);
  copyFile();
}

main();