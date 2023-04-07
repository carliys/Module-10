const Engineer = require ('../lib/Engineer');
const engineer = new Engineer ("Angie", "1234567", "Angieliz@gmail.com", "angeliz");

test('should create a new Employee instance with name, id, email, and github user', () => {
    expect(engineer.name).toEqual('Angie');
    expect(engineer.id).toEqual('1234567');
    expect(engineer.email).toEqual('Angieliz@gmail.com');
    expect(engineer.githubUsername).toEqual('angeliz');
});

test('should return the name from the getName', () => {
    expect(engineer.getName()).toBe('Angie');
});

test('should return the id from the getId', () => {
    expect(engineer.getId()).toBe('1234567');
});

test('should return the email from the getEmail', () => {
    expect(engineer.getEmail()).toBe('Angieliz@gmail.com');
});

test('should return the username from the githubUsername', () => {
    expect(engineer.getGithub()).toBe('Angieliz@gmail.com');
});

test('shoud return the role from the getRole()', () => {
    expect(engineer.getRole()).toBe('Engineer');
});