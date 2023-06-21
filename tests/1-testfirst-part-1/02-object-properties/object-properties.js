/* eslint-disable no-unused-vars */
let object = {};

function setPropsOnObj(object) {
  (object.x = 7), (object.y = 8);
  object.onePlus = function (inc) {
    return ++inc;
  };
}

let arrayObject = [];
function setPropsOnArr(any) {
  any.hello = function () {
    return "Hello!";
  };
  any.full = "stack";
  any[0] = 5;
  any.twoTimes = function (num) {
    return num * 2;
  };
}

let functionObject = {};
function setPropsOnFunc(pop) {
  pop.year = "20??";
  pop.divideByTwo = function (byTwo) {
    return byTwo / 2;
  };
}

function shallowCopy(one, two) {
  if (Array.isArray(one)) return [...one, ...two];
  return { ...one, ...two };
}
