const Manager = require ('../lib/Manager');
const manager = new Manager ("Angie", "1234567", "Angieliz@gmail.com", "678");

test('should create a new Employee instance with name, id, email, and office number', () => {
    expect(manager.name).toBe('Angie');
    expect(manager.id).toBe('1234567');
    expect(manager.email).toBe('Angieliz@gmail.com');
    expect(manager.officeNumber).toBe('678');
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
    expect(manager.getOfficeNumber()).toBe('678');
});

test('shoud return the role from the getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
});