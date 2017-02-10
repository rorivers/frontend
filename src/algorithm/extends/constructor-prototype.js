"use strict"

function Animal() {}
Animal.prototype._call = function(type) {
    console.log("I'm " + type);
  }
Animal.prototype.type1 = "type1";

function Cat() {}

// 这里采用new来创建，每次建一个Cat实例，都需要
// 建立Animal的实例，比较占内存。
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat; 
Cat.prototype.type1 = "CatType1";

let aCat = new Cat();
aCat._call("cat");

// 我们使用一个空对象类中继一下
function extend(Child, Parent) {
  let F = function() {};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
}

function Dog(name) {
  this.name = name;
}

extend(Dog, Animal);
Dog.prototype.type1 = "DogType1";

let aDog = new Dog();
console.log(aDog.type1);
aDog._call("dog");