/* eslint-disable no-unused-vars */
let pigify = (givenStr) => {
  let finalStr;
  let givenWords = givenStr.toLowerCase().split(" ");
  let tempArr = [];
  let vowelChar = "aeiou";
  givenWords.forEach((element) => {
    let tempStr = "";
    let charCount = 0;
    for (let i = 0; i < element.length; i++) {
      let tempChar = element[i] + element[i + 1];
      if (tempChar === "qu") {
        charCount = 2;
        tempStr += element[i];
        continue;
      }

      //Adding char to string
      if (charCount > 1) {
        tempStr += element[i];
        charCount--;
      } else if (vowelChar.includes(element[i])) {
        tempStr = element.slice(i) + tempStr + "ay";
        break;
      } else {
        tempStr += element[i];
      }
    }
    tempArr.push(tempStr);
  });
  finalStr = tempArr.join(" ");
  return finalStr;
};
