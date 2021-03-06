
const displayOfficeNum = function(employeeInfo) {
  let role = employeeInfo.getRole();

  if (role == 'Manager') {
    return `
    Office Number: ${employeeInfo.officeNumber}
    `;
  }
  else if (role == 'Engineer') {
    return `
    Github: <a href="https://github.com/${employeeInfo.getGithub()}" target="_blank">${employeeInfo.getGithub()}</a>
    `;
  }
  else {
    return `
    School: ${employeeInfo.getSchool()}
    `;
  }
}

const cardBodyData = function(employeeInfo) {
  return employeeInfo.map((employeeInfo) => {
    return `
    <div class="card">
      <h2 class="card-Header">
        ${employeeInfo.getName()} <br>
        ${employeeInfo.getRole()}
      </h2>
      <div class="card-Body">
        ID: ${employeeInfo.getId()} <br>
        Email: <a href="mailto:${employeeInfo.getEmail()}">${employeeInfo.getEmail()}</a> <br>
        ${displayOfficeNum(employeeInfo)}
      </div>
    </div>
    `;
  })
  .join('');
}

const cardData = function(employeeInfo) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>My Team</title>
  </head>
  <body>
  
    <header>
      <h1>My Team</h1>
    </header>
  
    <main>
      <div class="card-Container">
        ${cardBodyData(employeeInfo)}
      </div>
    </main>
    
  </body>
  </html>
  `;
}

module.exports = cardData;