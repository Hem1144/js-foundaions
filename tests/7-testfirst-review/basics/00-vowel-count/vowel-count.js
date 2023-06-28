/* eslint-disable no-unused-vars */
function vowelsCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const vowelCount = {};

  vowels.forEach((vowel) => {
    vowelCount[vowel] = 0;
  });
  

  const total = str
    .toLowerCase()
    .split("")
    .reduce((count, char) => {
      if (vowels.includes(char)) {
        vowelCount[char]++;
        return count + 1;
      }
      return count;
    }, 0);

  vowelCount["total"] = total;

  return vowelCount;
}
console.log(vowelsCount("Hemlal Dulal"));
