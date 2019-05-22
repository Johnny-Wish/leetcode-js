/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return '';
  } else if (strs.length === 1) {
    return strs[0];
  }

  let upperBound = strs[0].length;
  for (const str of strs) {
    if (str.length > upperBound) {
      upperBound = str.length;
    }
  }
  let i = 0;
  for (i = 0; i < upperBound; i ++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j ++) {
      if (strs[j][i] !== char) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0].substring(0, i);
};

console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix(['flower', 'flt', 'flow']));
console.log(longestCommonPrefix(['flower', '', 'flow']));
console.log(longestCommonPrefix(['afasfasfdasfasdfsafdasf']));
console.log(longestCommonPrefix(['afasfasfdasfasdfsafdasf', '']));
console.log(longestCommonPrefix(['', '']));

