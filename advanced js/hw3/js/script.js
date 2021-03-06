"use strict";

class Employee {
  constructor(name, age, salary) {
    this._name = name;
    this._age = age;
    this._salary = salary;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set age(age) {
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set salary(salary) {
    this._salary = salary;
  }

  get salary() {
    return this._salary;
  }
}

class Programmer extends Employee {
  constructor(name, age, salary, ...lang) {
    super(name, age, salary);
    this.lang = lang;
  }

  getSalary() {
    return parseFloat(this.salary) * 3;
  }
}

let Programmer1 = new Programmer("Ben", 27, "3000$", "English", "Ukrainian");
console.log(Programmer1);
console.log(Programmer1.getSalary());

let Programmer2 = new Programmer("Jon", 28, "4000", "Spanish", "German");
console.log(Programmer2);
console.log(Programmer2.getSalary());

let Programmer3 = new Programmer("Alex", 23, "1000", "Danish", "Italian");
console.log(Programmer3);
console.log(Programmer3.getSalary());
