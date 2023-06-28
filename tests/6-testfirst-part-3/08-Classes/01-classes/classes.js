/* eslint-disable no-unused-vars */
class Mammal {
  constructor(name) {
    this.name = name;
    this.offspring = [];
  }

  sayHello() {
    return `My name is ${this.name}, I'm a ${this.constructor.name}`;
  }

  haveBaby() {
    const x = new Mammal(`Baby ${this.name}`);
    this.offspring.push(x);
    return x;
  }
}

class Cat extends Mammal {
  constructor(name, color) {
    super(name);

    this.color = color;
  }

  haveBaby(color) {
    const y = new Cat(`Baby ${this.name}`, color);
    this.offspring.push(y);
    return y;
  }

  meow() {
    return "meow";
  }
}

class Dog extends Mammal {
  constructor(name, breed) {
    super(name);

    this.breed = breed;
  }

  haveBaby(breed) {
    const z = new Dog(`Baby ${this.name}`, breed);

    this.offspring.push(z);
    return z;
  }

  bark() {
    return "RUFF RUFF";
  }
}
