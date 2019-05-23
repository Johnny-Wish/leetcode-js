/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
  if (digits.length === 0) {
    return [];
  }

  const map = new Map();
  map.set('2', 'abc');
  map.set('3', 'def');
  map.set('4', 'ghi');
  map.set('5', 'jkl');
  map.set('6', 'mno');
  map.set('7', 'pqrs');
  map.set('8', 'tuv');
  map.set('9', 'wxyz');

  const getNewStrings = (oldStrings, number) => {
    const newStrings = [];
    const appendices = map.get(number);
    for (const str of oldStrings) {
      for (const appendix of appendices) {
        newStrings.push(str + appendix);
      }
    }
    return newStrings;
  }

  let combinations = [''];
  for (const number of digits) {
    if (number  === '1' || number === '0') {
      return [];
    }
    combinations = getNewStrings(combinations, number);
  }

  return combinations;
};

console.log(letterCombinations('23'));
console.log(letterCombinations(''));
