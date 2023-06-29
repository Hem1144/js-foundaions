/* eslint-disable no-unused-vars */
Array.prototype.maap = function (callback) {
  const res = [];
  this.forEach((ele) => {
    res.push(callback(ele));
  });
  return res;
};

Array.prototype.fiilter = function (callback) {
  const res = [];
  this.forEach((ele) => {
    if (callback(ele)) {
      res.push(ele);
    }
  });
  return res;
};

Array.prototype.reeduce = function (callback, initVal) {
  let accum = initVal;
  this.forEach((ele) => {
    accum = callback(accum, ele);
  });
  return accum;
};
