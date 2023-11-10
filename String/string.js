// 1
// Capitalize the first letter in array of string

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

const capitalize = (animals) => {
  const result = [];
  animals.forEach((el, i) => {
    result.push(el[0].toUpperCase() + el.slice(1));
  });
  return result;
};

//using map method
const capitalizeMap = (arr) => {
  const output = arr.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return output;
};
console.log(capitalizeMap(animals));

// console.log(capitalize(animals));

// 2
//Capitalize the first letter of each words of string in a sentence

const string = 'the world is not enough';
const capitalizeStr = (string) => {
  const capitalWords = [];
  const words = string.split(' ');
  words.forEach((el, i) => {
    capitalWords.push(el[0].toUpperCase() + el.slice(1));
  });
  return capitalWords.join(' ');
};

// console.log(capitalizeStr(string));
