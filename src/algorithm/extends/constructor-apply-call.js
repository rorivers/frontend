"use strict"

function Animal(type) {
  this.type = type;
}

function Cat(type, name) {
  Animal.apply(this, arguments);
  this.name = name;
}

let aCat = new Cat("Cat", "tom");

console.log(aCat.name);

function Dog(name) {
  Animal.call(this, "Dog");
  this.name = name;
}

let aDog = new Dog("Dog", "doggy");

console.log(aDog.name);