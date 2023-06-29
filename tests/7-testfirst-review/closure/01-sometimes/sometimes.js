/* eslint-disable no-unused-vars */
const sometimes = (func) => {
  let count = 0;
  return function () {
    count++;
    if (count <= 3 || count % 2 !== 0) {
      return func.apply(null, arguments);
    } else {
      return `I do not know!`;
    }
  };
};
