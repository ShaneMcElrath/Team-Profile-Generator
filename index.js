
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
  let { addNew } = await promptQuetions.addEmployeePrompt();

  while(addNew) {
    // Asks what type of employee you want to enter next.
    let { employeeType } = await promptQuetions.employeeRolePrompt();

    // If user selected Engineer then prompt Engineer questions.
    if (employeeType == 'Engineer') {
      // Asks user Engineer questions.
      let engineerInfo = await promptQuetions.engineerPrompt();
      // Puts user answer into new object.
      let engineer = new Engineer(engineerInfo);
      // Puts object into array of objects.
      employeeInfo.push(engineer);
    }
    // If users selected Intern the prompt Intern questions.
    else {
      // Asks user Intern questions.
      let internInfo = await promptQuetions.internPrompt();
      // Puts user answer into new object.
      let intern = new Intern(internInfo);
      // Puts object into array of objects.
      employeeInfo.push(intern);
    }

    // Asks user if they want to add another employee.
    ({ addNew } = await promptQuetions.addEmployeePrompt());
  }

  // Creates string of HTML using all of the employees info.
  let cardData = cardTemplate(employeeInfo);
  // Creates HTML file using string of HTML
  writeFile(cardData);
  // Copys CSS folder to another location.
  copyFile();
}

main();