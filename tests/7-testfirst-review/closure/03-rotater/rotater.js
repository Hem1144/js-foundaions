/* eslint-disable no-unused-vars */
const rotater = (str) => {
  let flip = false;
  let rotatedStr;

  return function (count) {
    if (count === str.length) {
      flip = !flip;
    }
    if (!flip) {
      rotatedStr = `${str.slice(count)}${str.slice(0, count)}`;
    } else {
      rotatedStr = `${str.slice(str.length - count)}${str.slice(
        0,
        str.length - count
      )}`;
    }
    return rotatedStr;
  };
};
