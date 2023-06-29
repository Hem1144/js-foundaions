/* eslint-disable no-unused-vars, no-extend-native */
Array.prototype.doNotInclude = function (notIncludedIndex) {
  if (!Array.isArray(notIncludedIndex)) {
    notIncludedIndex = [notIncludedIndex];
  }

  return this.filter((_, index) => !notIncludedIndex.includes(index));
};
