// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    // this.name = name;
    // this.id = id;
    // this.email = email;
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
// const testValue = 100;
// const e = new Manager("Foo", 1, "test@test.com", testValue);
// console.log(e.officeNumber);
