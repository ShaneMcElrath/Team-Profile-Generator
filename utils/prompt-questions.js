const inquirer = require('inquirer');
const questions = require('./questions');

const promptQuestions = {
  async managerPrompt() {
    // Changes base Questions to have the word manager in them.
    questions.updateQuestions('Manager');

    // Prompts user with base questions.
    let baseManagerInfo = await inquirer.prompt(questions.baseQuestions);

    // Prompts user with manager specific questions.
    let specificManagerInfo = await inquirer.prompt(questions.managerQuestion);

    // Asks user if they want to add another employee and return there anwser. 
    return await inquirer.prompt(questions.addEmployeeQuestion);
  }
}

module.exports = promptQuestions;