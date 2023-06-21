# 📚 TestFirst JavaScript Overview

TestFirst JavaScript is a multi-part series that provides practice to intermediate to advanced javascript concepts. The majority of concepts introduced in TestFirst have practice exercises. However, there will be new concepts introduced in TestFirst that you will need to learn on your own by reading documentation (it's important to begin learning how to read documentation efficiently!)

### Setting up the repository

<details><summary>Click to expand</summary>

### Before beginning your assignment, make sure you have completed these steps:

1. Forked & cloned the TestFirst repository.
2. Installed node and a text editor.

### Setup Test First

- **[Fork the repository to your personal GitHub Account](https://github.com/TEJ-Fellowship/js-foundations/)**
- **Clone** the repository to your local machine
- Install the VSCode [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) Extensions (if they aren't already installed)
- Run the command `npm install` inside each of the numbered directories inside the 'tests' directory (e.g. tests/1-testfirst-part-1)
- Run `testem` with the `npm run test` command or `npx testem` command

### Run Testem with npx testem

In your TestFirst directory run the command:

```sh
$ npm run test
```

OR

```sh

$ npx testem

```

After `testem` initiates, connect to `http//localhost:7357` in your web browser and your test specs will load.

</details>

---

## Foundations

### **_testfirst-part-1_**

<details><summary>Click to expand</summary>
<details><summary>TO STUDY: Click to expand</summary>

- Object creation
  - [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  ```
  let clone = Object.assign({}, objToClone)
  ```
  - [Object.create()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
  ```
  let parentObject = {name: "niru", grade:"masters"}
  let childObject = Object.create(parentObject)
  ```
  - Factory functions
  ```
  function makeStudent(name, grade) {
    let newStudent = {name, grade}
    return newStudent
  }
  let niru = makeStudent('niru', 'masters')
  ```
- New syntax / shortcuts

  - [Spread syntax (for arrays & objects)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

  ```
  let arrA = [1, [2,3], 4]
  let arrB = [4, 5, 6]
  let arrC = [20, ...arrA, arrB]

  let objA = {name: 'niru', grade: 'masters'}
  let objB = {age: 25}
  let objC = {age: 22, ...objA, objC}
  ```

  - [Shorthand object notations](https://attacomsian.com/blog/javascript-object-property-shorthand)

  ```
  let name = "niru"
  let grade = "masters"

  let niru = {name, grade}
  ```

- Preview

  - [\_\_proto\_\_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
  </details>

<details><summary>LECTURE NOTES: Click to expand</summary>

- [Object assign / Factory functions](lecture-notes/testfirst-part-1-object-assign-factory-function.js)
- [Object create / **proto**](lecture-notes/testfirst-part-1-object-create-proto.js)

</details>

<details><summary>TODO: Click to expand</summary>

- [testfirst part 1](tests/1-testfirst-part-1/)
- [checkpoint part 1 (optional)](tests/2-checkpoint-pt-1/)

</details>

<details><summary>SOLUTIONS (only look if needed): Click to expand</summary>

- [testfirst part 1](solutions/testfirst-part-1/)

</details>
</details>
</br>

### **_testfirst-part-2_**

<details><summary>Click to expand</summary>
<details><summary>TO STUDY: Click to expand</summary>

- [Arrow Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

```
const sayHello = (name) => `hello ${name}!`
console.log(sayHello('Pitamber'))
```

- [Constructor function](readings/testfirst-part-2-constructor.md)

```
function FourWheeler(fwType) {
    this.numberOfWheels = 4
    this.type = fwType
}

let car = new FourWheeler('car')
```

- Adding a prototype function to the constructor function

```
FourWheeler.prototype.honk = () => console.log('honk');
FourWheeler.prototype.setType = (newType) => this.type = newType;
```

- [the `arguments` parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

```
function someFunc() {
  console.log(arguments);
}

someFunc('hello', 'there', 'you');
```

### Array methods (functional)

- [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [Every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [Includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

</details>

<details><summary>LECTURE NOTES: Click to expand</summary>

- [Arrow function](lecture-notes/testfirst-part-2-arrow-function.js)
- [Array methods / arguments ](lecture-notes/testfirst-part-2.js)

</details>

<details><summary>TODO: Click to expand</summary>

- [testfirst part 2](tests/3-testfirst-part-2/)
- [checkpoint part 2 (optional)](tests/5-checkpoint-pt-2/)
- [vanishing man](tests/4-vanishing-man/)
  - string methods: be familiar with methods such as [split](https://www.programiz.com/javascript/library/string/split)
  - array methods: be familiar with array methods mentioned above

</details>

<details><summary>SOLUTIONS (only look if needed): Click to expand</summary>

- [testfirst part 2](solutions/testfirst-part-2/)
- [vanishing man](solutions/vanishing-man/)

</details>
</details>
</br>

### **_testfirst-part-3_**

<details><summary>Click to expand</summary>
<details><summary>TO STUDY: Click to expand</summary>

- [Class](readings/testfirst-part-3-classes.md)

```
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  sayHello() {
    return `My name is ${this.name}`;
  }
}

let newStudent = new Student('niru', 'masters')
```

- [Extending a class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)

```
class TEJstudent extends Student {
  constructor(name, grade) {
    super(name, grade);

    this.isTEJfellow = true;
  }

  schoolLocation() {
    return "The school is in Pasayard"
  }
}
```

- [this.constructor.name](https://bobbyhadz.com/blog/javascript-get-class-name-of-object): will print the name of class that the instance was created from

</details>

<details><summary>LECTURE NOTES: Click to expand</summary>

- [testfirst part 3](lecture-notes/testfirst-part-3.js)

</details>

<details><summary>TODO: Click to expand</summary>

- [testfirst part 3](tests/6-testfirst-part-3/)
- [testfirst review (optional)](tests/7-testfirst-review/)
- [checkpoint final (optional)](tests/8-checkpoint-final/)

</details>

<details><summary>SOLUTIONS (only look if needed): Click to expand</summary>

- [testfirst part 3](solutions/testfirst-part-3/)
- [testfirst review](solutions/testfirst-review/)

</details>
</details>
</br>

### **_HTML / CSS_**

<details><summary>Click to expand</summary>
<details><summary>TO STUDY: Click to expand</summary>

- [HTML / CSS](readings/html-css.md)

</details>

<details><summary>LECTURE NOTES: Click to expand</summary>

- [HTML / CSS]()

</details>

<details><summary>TODO: Click to expand</summary>

- [PART 1 (HTML / CSS) of guessing game](tests/9-guessing-game/)

</details>

<details><summary>SOLUTIONS (only look if needed): Click to expand</summary>

- [guessing game](solutions/guessing-game/)

</details>
</details>
</br>

### **_DOM_**

<details><summary>Click to expand</summary>
<details><summary>TO STUDY: Click to expand</summary>

- [DOM](readings/dom.md)

</details>

<details><summary>LECTURE NOTES: Click to expand</summary>

- [DOM]()

</details>

<details><summary>TODO: Click to expand</summary>

- [PART 2 (DOM) of guessing game](tests/9-guessing-game/)

</details>

<details><summary>SOLUTIONS (only look if needed): Click to expand</summary>

- [guessing game](solutions/guessing-game/)

</details>
</details>
</br>

---

## Vanilla JavaScript projects

### **_WHACK-A-MOLE_**

<details><summary>Click to expand</summary>
<details><summary>TO STUDY: Click to expand</summary>

### Concepts to know for this exercise

- `document.querySelectorAll`
- _element_.classList
- _element_.classList.toggle(_className_)
- `setInterval`(_function_, _time in milliseconds_)
- `addEventlistener` will pass the `event` as argument to it's function in

```js
myElement.addEventlistener("click", function (e) {
  console.dir(e);
});
```

</details>
<details><summary>LECTURE NOTES: Click to expand</summary>
</details>
<details><summary>TODO: Click to expand</summary>

- [Instructions for whack-a-mole](readings/whack-a-mole.md)
- please fork this [repository](https://github.com/TEJ-Fellowship/whack-a-mole) to start your solution

</details>
<details><summary>SOLUTIONS (only look if needed): Click to expand</summary>

- the basic solution is in the [solution](https://github.com/TEJ-Fellowship/whack-a-mole/tree/solution) branch
- the solution with timer is in the [solution with timer](https://github.com/TEJ-Fellowship/whack-a-mole/tree/solutionWithTimer) branch

</details>
</details>
<br/>

### **_PIXELATE_**

<details><summary>Click to expand</summary>
<details><summary>TO STUDY: Click to expand</summary>

### Concepts to know for this exercise

- styling - height, width, background-color
- document.createElement
- parentElement.appendChild(newElement)
- HTML elements `tr` and `td`

</details>
<details><summary>LECTURE NOTES: Click to expand</summary>
</details>
<details><summary>TODO: Click to expand</summary>

- [Instructions for pixelate](readings/pixelate.md)
- please fork this [repository](https://github.com/TEJ-Fellowship/pixelate) to start your solution

</details>
<details><summary>SOLUTIONS (only look if needed): Click to expand</summary>

- [Solution for pixelate](https://github.com/TEJ-Fellowship/pixelate.solution)

</details>
</details>
<br/>

### **_GAME-OF-LIFE_**

<details><summary>Click to expand</summary>
<details><summary>TO STUDY: Click to expand</summary>

### Concepts to know for this exercise

- what is ['game of life'](https://en.wikipedia.org/wiki/Conway's_Game_of_Life)?
- [_Element_.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) attribute
- how can we include js script at the top of our index.html? what does the keyword [`defer`](https://www.w3schools.com/tags/att_script_defer.asp) do?

</details>
<details><summary>LECTURE NOTES: Click to expand</summary>
</details>
<details><summary>TODO: Click to expand</summary>

- [See what you will be building](https://tej-fellowship.github.io/game-of-life.solution/)
- [Instructions for game-of-life](readings/game-of-life.md)
- please fork this [repository](https://github.com/TEJ-Fellowship/game-of-life) to start your project

</details>
<details><summary>SOLUTIONS (only look if needed): Click to expand</summary>

- [Solution for game-of-life](https://github.com/TEJ-Fellowship/game-of-life.solution)

</details>
</details>
<br/>

### **_COFFEE-CLICKER_**

<details><summary>Click to expand</summary>
<details><summary>TO STUDY: Click to expand</summary>

- [_String_.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [Removing all children from an element](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)
- [Using localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

</details>
<details><summary>LECTURE NOTES: Click to expand</summary>
</details>
<details><summary>TODO: Click to expand</summary>

- [See what you will be building](https://TEJ-Fellowship.github.io/coffee-clicker.solution/)
- [Instructions for coffee-clicker](https://github.com/TEJ-Fellowship/coffee-clicker/blob/main/README.md)
- please fork this [repository](https://github.com/TEJ-Fellowship/coffee-clicker) to start your project

</details>
<details><summary>SOLUTIONS (only look if needed): Click to expand</summary>

- [Solution for coffee-clicker](https://github.com/TEJ-Fellowship/coffee-clicker.solution)

</details>
</details>
