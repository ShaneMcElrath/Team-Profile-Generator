
const cardBodyData = function() {
  return ` <div class="card">
    <h2 class="card-Header">
      manager.Name <br>
      Manager
    </h2>
    <div class="card-Body">
      ID 123 <br>
      Email:suman@gmail.com
    </div>
  </div>
  `;
};

const cardData = function() {

  
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
      ${cardBodyData()}
    </main>
    
  </body>
  </html>
  `;
}

module.exports = cardData;