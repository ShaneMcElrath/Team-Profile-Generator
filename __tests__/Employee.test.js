const Employee = require('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee('Shane', 1, 'shane@gmail.com');

  expect(employee.name).toBe('Shane');
  expect(employee.id).toBe(1);
  expect(employee.email).toBe('shane@gmail.com');
});

test('gets employee name, id, email, and role using get functions', () => {
  const employee = new Employee('Shane', 1, 'shane@gmail.com');

  expect(employee.getName()).toBe('Shane');
  expect(employee.getId()).toBe(1);
  expect(employee.getEmail()).toBe('shane@gmail.com');
  expect(employee.getRole()).toBe('Employee');
})