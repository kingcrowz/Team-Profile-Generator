const Employee = require("../lib/Employee");

describe('Employee Testing', () => {
    it('testing to make sure we get the name of the employee', () => {
        let newEmp = new Employee('John', 12, 'email@mail')
        expect(newEmp.getName()).toBe('John');
    });
    it('testing to make sure id gets saved and returned', () => {
        let newEmp = new Employee('John', 12, 'email@mail')
        expect(newEmp.getId()).toBe(12);
    });
    it('testing to make sure email gets saved and returned', () => {
        let newEmp = new Employee('John', 12, 'email@mail')
        expect(newEmp.getEmail()).toBe('email@mail');
    });
    it('testing to make sure role is saved and returned', () => {
        let newEmp = new Employee('John', 12, 'email@mail')
        expect(newEmp.getRole()).toBe('Employee');
    });
})