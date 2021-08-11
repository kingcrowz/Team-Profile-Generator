const Employee = require("../lib/Employee");
const Engineer = require('../lib/Engineer');

describe('Employee Testing', () => {
    it('testing to make sure we get the name of the Engineer', () => {
        let newEmp = new Engineer('John', 12, 'email@mail', 'kingcrowz')
        expect(newEmp.getName()).toBe('John');
    });
    it('testing to make sure id gets saved and returned', () => {
        let newEmp = new Engineer('John', 12, 'email@mail', 'kingcrowz')
        expect(newEmp.getId()).toBe(12);
    });
    it('testing to make sure email gets saved and returned', () => {
        let newEmp = new Engineer('John', 12, 'email@mail', 'kingcrowz')
        expect(newEmp.getEmail()).toBe('email@mail');
    });
    it('testing to make sure role is saved and returned', () => {
        let newEmp = new Engineer('John', 12, 'email@mail', 'kingcrowz')
        expect(newEmp.getRole()).toBe('Engineer');
    });
    it('testing to make sure office number is saved and returned', () => {
        let newEmp = new Engineer('John', 12, 'email@mail', 'kingcrowz')
        expect(newEmp.getGithub()).toBe('kingcrowz');
    });
})