/* eslint-disable no-unused-vars, no-throw-literal*/

/*
  Refactor the constructor function below and use ES2015 Class Syntax
*/
class RPNCalculator {
  constructor() {
    this.numStack = [];
  }

  push(num) {
    this.numStack.push(num);
  }

  popCalc(func) {
    if (this.numStack.length < 2) {
      throw "rpnCalculatorInstance is empty";
    } else {
      const num1 = this.numStack.pop();
      const num2 = this.numStack.pop();

      this.push(func(num1, num2));
    }
  }

  plus() {
    this.popCalc((one, two) => one + two);
  }

  value() {
    return this.numStack[this.numStack.length - 1];
  }

  minus() {
    this.popCalc((one, two) => two - one);
  }

  times() {
    this.popCalc((one, two) => one * two);
  }

  divide() {
    this.popCalc((one, two) => two / one);
  }
}

