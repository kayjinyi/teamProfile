// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}
module.exports = Employee;

// const e = new Employee();
// console.log(typeof e);
// const nameY = "Alice";
// const e = new Employee(nameY);
// console.log(e.name);
// const testValue = 100;
// const e = new Employee("Foo", testValue);
// console.log(e.id);
// const testValue = "test@test.com";
// const e = new Employee("Foo", 1, testValue);
// console.log(e.email);
// const testValue = "Alice";
// const e = new Employee(testValue);
// console.log(e.getName());

// const testValue2 = 100;
// const e2 = new Employee("Foo", testValue2);
// console.log(e2.getId());

// const testValue = "test@test.com";
// const e = new Employee("Foo", 1, testValue);
// console.log(e.getEmail());

// const testValue = "Employee";
// const e = new Employee("Alice", 1, "test@test.com");
// console.log(e.getRole());
