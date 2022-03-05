
const {writeFile, copyFile} = require('./utils/generate-site');
const promptQuetions = require('./utils/prompt-questions');

// Prompts user with questions about the manager then returns whether or
// not the user wants to add another employee.
let addNew = promptQuetions.managerPrompt();

while(addNew) {
  break;
}

  