const Intern = require('../lib/Intern');

describe('Intern test', () => {
    it('Intern class creates corresponding name', () => {
        const intern = new Intern('Jalen', '11', 'Jalen@gmail.com', 'UCI');
        expect(intern.getName()).toEqual('Jalen');
    });
    it('Intern class creates corresponding id', () => {
        const intern = new Intern('Jalen', '11', 'Jalen@gmail.com', 'UCI');
        expect(intern.getId()).toEqual('11');
    });
    it('Intern class creates corresponding email', () => {
        const intern = new Intern('Jalen', '11', 'Jalen@gmail.com', 'UCI');
        expect(intern.getEmail()).toEqual('Jalen@gmail.com');
    });
    it('Intern class creates corresponding school', () => {
        const intern = new Intern('Jalen', '11', 'Jalen@gmail.com', 'UCI');
        expect(intern.getSchool()).toEqual('UCI');
    });
})