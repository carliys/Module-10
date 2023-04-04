const Employee = require ("../Employee");
const employee = new Employee ("Angie", "1234567", "Angieliz@gmail.com");

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('Angie');
    expect(employee.id).toBe('1234567');
    expect(employee.email).toBe('Angieliz@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('Angie');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('1234567');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('Angieliz@gmail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});