const Intern = require ('../lib/Intern');
const intern = new Intern ("Angie", "1234567", "Angieliz@gmail.com", "Camelback");

test('should create a new Employee instance with name, id, email, and school', () => {
    expect(intern.name).toEqual('Angie');
    expect(intern.id).toEqual('1234567');
    expect(intern.email).toEqual('Angieliz@gmail.com');
    expect(intern.school).toEqual('Camelback');
});

test('should return the name from the getName', () => {
    expect(intern.getName()).toBe('Angie');
});

test('should return the id from the getId', () => {
    expect(intern.getId()).toBe('1234567');
});

test('should return the email from the getEmail', () => {
    expect(intern.getEmail()).toBe('Angieliz@gmail.com');
});

test('should return the school from the getSchool', () => {
    expect(intern.getSchool()).toBe('Camelback');
});

test('shoud return the role from the getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
});