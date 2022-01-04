const Employee = require('../lib/Employee');


test('prompts user with quetions', done => {
    const employee = new Employee();

    try {
      let hello = employee.promtQuestions();      
      console.log(hello);  
      done();   
    }
    catch (err) {    
     console.log(err);
     done(error);
    }    
  



});