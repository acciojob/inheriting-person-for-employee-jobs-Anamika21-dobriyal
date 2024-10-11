// complete this js code
//Define a Person class
function Person(name, age) {
	constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // greet method in Person class
  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
  }
}



// Define Employee class that extends Person

//function Employee(name, age, jobTitle) {}
class Employee extends Person {
  constructor(name, age, jobTitle) {
    // Call the parent class constructor (Person) to initialize name and age
    super(name, age);
    this.jobTitle = jobTitle;
  }

  // jobGreet method in Employee class
  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`);
  }
}


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
