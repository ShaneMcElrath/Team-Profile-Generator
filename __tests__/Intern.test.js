const Intern = require('../lib/Intern');

test('creates an intern object', () => {
  const intern = new Intern('Shane', 1, 'shane@gmail.com', 'UCF');

  expect(intern.name).toBe('Shane');
  expect(intern.id).toBe(1);
  expect(intern.email).toBe('shane@gmail.com');
  expect(intern.school).toBe('UCF');
});

test('gets intern name, id, email, role, and school using get functions', () => {
  const intern = new Intern('Shane', 1, 'shane@gmail.com', 'UCF');

  expect(intern.getName()).toBe('Shane');
  expect(intern.getId()).toBe(1);
  expect(intern.getEmail()).toBe('shane@gmail.com');
  expect(intern.getRole()).toBe('Intern');
  expect(intern.getSchool()).toBe('UCF');
})