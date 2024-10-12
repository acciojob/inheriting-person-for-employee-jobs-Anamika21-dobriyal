// complete this js code
//Define a Person class
// class Person(name, age){
//     this.name = name;
//     this.age = age;
//   }

// Define the Person class
class Person {
  constructor(name, age) {
    this.name = name; // Initialize the name property
    this.age = age;   // Initialize the age property
  }

  // Method to greet using name and age
  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Define the Employee class that extends the Person class
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the parent class's constructor (Person)
    this.jobTitle = jobTitle; // Initialize the jobTitle property
  }

  // Method to greet with name, age, and job title
  jobGreet() {
    console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
    );
  }
}

// Test Case Example:

// Creating an instance of the Person class
const person = new Person("Alice", 25);
person.greet(); // Output: Hello, my name is Alice, I am 25 years old.

// Creating an instance of the Employee class
const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet(); 
// Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
