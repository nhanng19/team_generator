const Engineer = require('../lib/Engineer');

describe('Engineer test', () => {
    it('Engineer class creates corresponding name', () => {
        const engineer = new Engineer('Jalen', '11', 'Jalen@gmail.com', 'jalenSmith');
        expect(engineer.getName()).toEqual('Jalen');
    });
    it('Engineer class creates corresponding id', () => {
        const engineer = new Engineer('Jalen', '11', 'Jalen@gmail.com', 'jalenSmith');
        expect(engineer.getId()).toEqual('11');
    });
    it('Engineer class creates corresponding email', () => {
        const engineer = new Engineer('Jalen', '11', 'Jalen@gmail.com', 'jalenSmith');
        expect(engineer.getEmail()).toEqual('Jalen@gmail.com');
    });
    it('the github entered is a string', () => {
        const engineer = new Engineer('Jalen', '11', 'Jalen@gmail.com', 'jalenSmith');
        expect(engineer.getGithub()).toEqual('jalenSmith');
    });
    })