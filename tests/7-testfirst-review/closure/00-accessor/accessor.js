/* eslint-disable no-unused-vars */
const accessor = (obj) => {
  return function (prop, val) {
    if (val !== undefined) {
      obj[prop] = val;
    } else {
      return obj[prop];
    }
  };
};
console.log(
  accessor({
    name: "Dulal",
    age: 24,
  })
);
