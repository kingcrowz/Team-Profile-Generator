const Employee = require("../lib/Employee");
const Intern = require('../lib/Intern');

describe('Employee Testing', () => {
    it('testing to make sure we get the name of the Intern', () => {
        let newEmp = new Intern('John', 12, 'email@mail', 'Rutgers')
        expect(newEmp.getName()).toBe('John');
    });
    it('testing to make sure id gets saved and returned', () => {
        let newEmp = new Intern('John', 12, 'email@mail', 'Rutgers')
        expect(newEmp.getId()).toBe(12);
    });
    it('testing to make sure email gets saved and returned', () => {
        let newEmp = new Intern('John', 12, 'email@mail', 'Rutgers')
        expect(newEmp.getEmail()).toBe('email@mail');
    });
    it('testing to make sure role is saved and returned', () => {
        let newEmp = new Intern('John', 12, 'email@mail', 'Rutgers')
        expect(newEmp.getRole()).toBe('Intern');
    });
    it('testing to make sure office number is saved and returned', () => {
        let newEmp = new Intern('John', 12, 'email@mail', 'Rutgers')
        expect(newEmp.getSchool()).toBe('Rutgers');
    });
})