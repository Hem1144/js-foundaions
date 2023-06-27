/* eslint-disable no-unused-vars */

const indexAndValue = (arr) => {
  return arr.map((value, index) => {
    return { value, index };
  });
};

const capitalize = (str) => str.toUpperCase();

const swapCase = (str) => {
  return str
    .split(" ")
    .map((word, i) => {
      if (i % 2 === 0) return capitalize(word);
      return word;
    })
    .join(" ");
};

const getPopulation = (arr, countries) => {
  return arr.reduce((accum, country) => {
    if (countries.includes(country.name) || countries.length === 0) {
      return accum + country.population;
    }
    return accum;
  }, 0);
};

const keyifyArrayOfObjects = (key, arr) => {
  return arr.reduce((accum, obj) => {
    accum[obj[key]] = obj;
    return accum;
  }, {});
};

const powerLevelAverage = (arr) => {
  return Math.round(
    arr.reduce((accum, obj) => {
      return accum + obj.powerLevel;
    }, 0) / arr.length
  );
};

const separateAndReturnNames = (arr, property, lengthOfName) => {
  return arr
    .map((obj) => {
      const [firstName, lastName] = obj.name.split(" ");
      obj.firstName = firstName;
      obj.lastName = lastName;
      return obj;
    })
    .filter((obj) => obj[property].length <= lengthOfName)
    .map((obj) => obj[property]);
};

const priorityTodoDuration = (todoList) => {
  return todoList
    .filter((todo) => todo.priority === "high")
    .reduce((accum, todo) => {
      return accum + todo.duration;
    }, 0);
};

const inYourBudget = (val, arr) => {
  return arr.filter((item) => item.price < val).map((item) => item.item);
};

const extensionSearch = (ext, arr) => {
  return arr.filter((file) => file.includes(ext));
};

const mapReduce = (arr, iteratorFunc) => {
  return arr.reduce((accum, val) => {
    accum.push(iteratorFunc(val));
    return accum;
    // return [...accum, iteratorFunc(val)]
  }, []);
};

const filterReduce = (arr, iteratorFunc) => {
  return arr.reduce((accum, val) => {
    if (iteratorFunc(val)) accum.push(val);
    return accum;
  }, []);
};
