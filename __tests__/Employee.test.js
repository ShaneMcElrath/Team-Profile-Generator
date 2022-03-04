const Employee = require('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee('Robby', 1, 'robby@gmail.com');

  expect(employee.name).toBe('Robby');
  expect(employee.id).toBe(1);
  expect(employee.email).toBe('robby@gmail.com');
});

test('gets employee name, id, email, and role using get functions', () => {
  const employee = new Employee('Robby', 1, 'robby@gmail.com');

  expect(employee.getName()).toBe('Robby');
  expect(employee.getId()).toBe(1);
  expect(employee.getEmail()).toBe('robby@gmail.com');
  expect(employee.getRole()).toBe('Employee');
})