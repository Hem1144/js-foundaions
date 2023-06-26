/* eslint-disable no-unused-vars */
function concatString() {
  return Array.from(arguments).join("");
}

const yourFunctionRunner = function () {
  let finalString = "";
  for (let i = 0; i < arguments.length; i++) {
    finalString += arguments[i]();
  }
  return finalString;
};

const makeAdder = (remember) => {
  return function (num) {
    return num + remember;
  };
};

const once = (func) => {
  let noCall = true;
  return () => {
    if (noCall) {
      noCall = false;
      return func();
    }
    return `the function has already been called...`;
  };
};

const createObjectWithClosures = function () {
  let total = 0;
  return {
    oneIncrementer: function () {
      total += 1;
    },
    tensIncrementer: function () {
      total += 10;
    },
    getValue: function () {
      return total;
    },
    setValue: function (val) {
      total = val;
    },
  };
};

function dontSpillTheBeans(secret) {
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (k) {
      secret = k;
    },
  };
}
