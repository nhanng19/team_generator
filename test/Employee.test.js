const Employee = require('../lib/Employee');

describe('Employee test', () => {
    it('Employee class creates corresponding name', () => {
        const employee = new Employee('Jalen', '11', 'Jalen@gmail.com');
        expect(employee.getName()).toEqual('Jalen');
    });
    it('Employee class creates corresponding id', () => {
        const employee = new Employee('Jalen', '11', 'Jalen@gmail.com');
        expect(employee.getId()).toEqual('11');
    });
    it('Employee class creates corresponding email', () => {
        const employee = new Employee('Jalen', '11', 'Jalen@gmail.com');
        expect(employee.getEmail()).toEqual('Jalen@gmail.com');
    });
});