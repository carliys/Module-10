const Employee = require ('../lib/Employee');
const employee = new Employee ("Angie", "1234567", "Angieliz@gmail.com");

test('should create a new Employee instance with name, id, email, and role', () => {
    expect(employee.name).toEqual('Angie');
    expect(employee.id).toEqual('1234567');
    expect(employee.email).toEqual('Angieliz@gmail.com');
});

test('should return the name from the getName()', () => {
    expect(employee.getName()).toBe('Angie');
});

test('should return the id from the getId()', () => {
    expect(employee.getId()).toBe('1234567');
});

test('should return the email from the getEmail()', () => {
    expect(employee.getEmail()).toBe('Angieliz@gmail.com');
});

test('shoud return the role from the getRole()', () => {
    expect(employee.getRole()).toBe('Employee');
});