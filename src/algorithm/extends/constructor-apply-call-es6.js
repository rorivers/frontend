"use strict"

function Animal(type1, type2) {
  this.type1 = type1;
  this.type2 = type2;
}

function Cat(name) {
  Animal.apply(this, ["CatType1", "CatType2"]);
  this.name = name;
}

let aCat = new Cat("tom");
console.log(aCat.type1);
console.log(aCat.type2);
console.log(aCat.name);

function Dog(name) {
  let dogType = ["DogType1", "DogType2"];
  Animal.call(this, ...dogType);
  this.name = name;
}

let aDog = new Dog("Dog", "doggy");
console.log(aDog.type1);
console.log(aDog.type2);
console.log(aDog.name);