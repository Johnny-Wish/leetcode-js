/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  s = s.trim();
  if (s.length === 0) {
    return 0;
  }

  let j = s.length - 1;
  let length = 0;
  if (s[j] === ' ') {
    return 0;
  }

  while (j >= 0 && s[j] !== ' ') {
    j --;
    length ++;
  }

  return length;
};


console.log(lengthOfLastWord('abc def ghi'));
console.log(lengthOfLastWord('abc def ghi '));
console.log(lengthOfLastWord(''));
console.log(lengthOfLastWord('abcdefghi'));
console.log(lengthOfLastWord('a'));
console.log(lengthOfLastWord('             '));
