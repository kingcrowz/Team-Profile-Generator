const Employee = require("../lib/Employee");
const Manager = require('../lib/Manager');

describe('Employee Testing', () => {
    it('testing to make sure we get the name of the employee', () => {
        let newEmp = new Manager('John', 12, 'email@mail', 23)
        expect(newEmp.getName()).toBe('John');
    });
    it('testing to make sure id gets saved and returned', () => {
        let newEmp = new Manager('John', 12, 'email@mail', 23)
        expect(newEmp.getId()).toBe(12);
    });
    it('testing to make sure email gets saved and returned', () => {
        let newEmp = new Manager('John', 12, 'email@mail', 23)
        expect(newEmp.getEmail()).toBe('email@mail');
    });
    it('testing to make sure role is saved and returned', () => {
        let newEmp = new Manager('John', 12, 'email@mail', 23)
        expect(newEmp.getRole()).toBe('Manager');
    });
    it('testing to make sure office number is saved and returned', () => {
        let newEmp = new Manager('John', 12, 'email@mail', 23)
        expect(newEmp.getOfficeNumber()).toBe(23);
    });
})