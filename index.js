
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const CardTemplate = require('./src/card-template');
const fs = require('fs');

// Takes fileContent and writes it to index.html
function writeToFile(fileContent) {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        console.log(err.message);
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'file created!'
      });
    });
  });
}

const manager = new Manager();

manager.promtQuestions(manager)
  .then(cardData())
  .then(fileContent => {

    writeToFile(fileContent);
  });


  