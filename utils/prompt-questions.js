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

    return { ...baseManagerInfo, ...specificManagerInfo };
  },

  async addEmployeePrompt() {
    // Asks user if they want to add another employee and returns their anwser. 
    return await inquirer.prompt(questions.addEmployeeQuestion);
  },

  async employeeRolePrompt() {
    // Asks user what type of employee they want to add next and returns their anwser.
    return await inquirer.prompt(questions.employeeRoleQuestion);
  }
}

module.exports = promptQuestions;