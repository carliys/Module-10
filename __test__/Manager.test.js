const Manager = require ('../lib/Manager');
const manager = new Manager ("Angie", "1234567", "Angieliz@gmail.com", "123");

test('should create a new Employee instance with name, id, email, and office number', () => {
    expect(manager.name).toEqual('Angie');
    expect(manager.id).toEqual('1234567');
    expect(manager.email).toEqual('Angieliz@gmail.com');
    expect(manager.officeNumber).toEqual('123');
});

test('should return the name from the getName', () => {
    expect(manager.getName()).toBe('Angie');
});

test('should return the id from the getId', () => {
    expect(manager.getId()).toBe('1234567');
});

test('should return the email from the getEmail', () => {
    expect(manager.getEmail()).toBe('Angieliz@gmail.com');
});

test('should return the school from the getOfficeNumber', () => {
    expect(manager.getOfficeNumber()).toBe('123');
});

test('shoud return the role from the getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
});