/* eslint-disable no-unused-vars */
function multipleMaps(arr1, arr2) {
  return arr1.map((value) => {
    const resultMap = arr2.reduce((result, map) => {
      if (map.hasOwnProperty(value)) {
        result.push(map[value]);
      }
      return result;
    }, []);
    return resultMap.length > 0 ? resultMap[0] : value;
  });
}
