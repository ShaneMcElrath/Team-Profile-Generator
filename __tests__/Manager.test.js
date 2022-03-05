const Manager = require('../lib/Manager');

test('creates an manager object', () => {
  const manager = new Manager('Shane', 1, 'shane@gmail.com', 500);

  expect(manager.name).toBe('Shane');
  expect(manager.id).toBe(1);
  expect(manager.email).toBe('shane@gmail.com');
  expect(manager.officeNumber).toBe(500);
});

test('gets manager name, id, email, and role using get functions', () => {
  const manager = new Manager('Shane', 1, 'shane@gmail.com', 500);

  expect(manager.getName()).toBe('Shane');
  expect(manager.getId()).toBe(1);
  expect(manager.getEmail()).toBe('shane@gmail.com');
  expect(manager.getRole()).toBe('Manager');
});