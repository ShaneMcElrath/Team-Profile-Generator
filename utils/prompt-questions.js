const inquirer = require('inquirer');
const questions = require('./questions');

const promptQuestions = {
  managerPrompt() {
    // Changes base Questions to have the word manager in them.
    questions.updateQuestions('Manager');

    // Promps user with base questions.
    let managerInfo = inquirer.prompt(questions.baseQuestions);


  }
}

module.exports = promptQuestions;