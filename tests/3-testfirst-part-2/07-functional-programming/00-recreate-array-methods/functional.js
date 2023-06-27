/* eslint-disable no-unused-vars */
const forEach = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
};

const doubler = (n) => n * 2;

const map = (arr, func) => {
  let retarr = [];
  for (let i = 0; i < arr.length; i++) {
    retarr.push(func(arr[i]));
  }
  return retarr;
};

const filter = (arr, filtFunc) => {
  const retarr = [];

  const filter = (arr, filtFunc) => {
    const retarr = [];
  };

  for (let i = 0; i < arr.length; i++) {
    if (filtFunc(arr[i])) {
      retarr.push(arr[i]);
    }
  }
  return retarr;
};

const includes = (coll, searchVal) => {
  for (key in coll) {
    if (coll.hasOwnProperty(key)) {
      if (coll[key] === searchVal) {
        return true;
      }
    }
  }
  return false;
};

const countWords = (currentVal, sentence) =>
  currentVal + sentence.split(" ").length;

const reduce = (arr, startVal, combinerFunc) => {
  let value = startVal;
  arr.forEach((index) => {
    value = combinerFunc(value, index);
  });
  return value;
};

const sum = (arr) => {
  const adder = (currSum, nextVal) => currSum + nextVal;
  return reduce(arr, 0, adder);
};

const every = (arr, checkerFunc) => {
  const everyIterator = (currVal, nextVal) => currVal && checkerFunc(nextVal);
  return reduce(arr, true, everyIterator);
};

const some = (arr, checkerFunc) => {
  const someIterator = (currentVal, nextVal) =>
    currentVal || checkerFunc(nextVal);

  return reduce(arr, false, someIterator);
};
