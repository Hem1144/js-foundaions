/* eslint-disable no-unused-vars */
const repeat = (str, multi) => {
  let finalString = "";
  for (multi; multi > 0; multi--) {
    finalString += str;
  }
  return finalString;
};

const sum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const gridGenerator = (size) => {
  let board = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if ((i + j) % 2 === 0) {
        board += "#";
      } else {
        board += " ";
      }
    }
    board += "\n";
  }
  return board;
};

const join = (arr, delimiter) => {
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    string += arr[i];
    if (typeof delimiter !== "undefined" && i < arr.length - 1) {
      string += delimiter;
    }
  }
  return string;
};

const paramify = (obj) => {
  const params = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      params.push(`${prop}=${obj[prop]}`);
    }
  }
  return join(params.sort(), "&");
};

const paramifyObjectKeys = (obj) => {
  return Object.keys(obj)
    .map((key) => {
      return `${key}=${obj[key]}`;
    })
    .sort()
    .join("&");
};

function sort(items) {
  let length = items.length;
  for (let i = length - 1; i >= 0; i--) {
    for (let j = length - i; j > 0; j--) {
      if (items[j] < items[j - 1]) {
        let tmp = items[j];
        items[j] = items[j - 1];
        items[j - 1] = tmp;
      }
    }
  }
  return items;
}
