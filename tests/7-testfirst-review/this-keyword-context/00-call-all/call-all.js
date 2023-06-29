/* eslint-disable no-unused-vars */
function callAll(obj, funcArr) {
  return funcArr.map((func) => func.call(obj));
}
