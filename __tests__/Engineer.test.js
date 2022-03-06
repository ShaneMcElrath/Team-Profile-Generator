const Engineer = require('../lib/Engineer');

test('creates Engineer object', () => {
  const engineer = new Engineer({ 
    name: 'Shane',
    id: 1,
    email: 'shane@gmail.com',
    github: 'ShaneMcElrath' 
  });

  expect(engineer.name).toBe('Shane');
  expect(engineer.id).toBe(1);
  expect(engineer.email).toBe('shane@gmail.com');
  expect(engineer.github).toBe('ShaneMcElrath');
})

test('gets Engineer name, id, email, github username, and role using get functions', () => {
  const employee = new Engineer({ 
    name: 'Shane',
    id: 1,
    email: 'shane@gmail.com',
    github: 'ShaneMcElrath' 
  });

  expect(employee.getName()).toBe('Shane');
  expect(employee.getId()).toBe(1);
  expect(employee.getEmail()).toBe('shane@gmail.com');
  expect(employee.getGithub()).toBe('ShaneMcElrath');
  expect(employee.getRole()).toBe('Engineer');
})