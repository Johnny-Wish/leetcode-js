/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function(str) {
  const isNumber = (char) => (char <= '9' && char >= '0');
  const upperBound = 2 ** 31 - 1;
  const lowerBound = - (2 ** 31);
  let i = 0;
  let pos = true;
  let val = 0;
  while (i < str.length && str[i] === ' ') {
    i ++;
  }

  if (str[i] === '-') {
    pos = false;
    i ++;
  } else if (str[i] === '+') {
    i ++;
  } else if (!isNumber(str[i])) {
    return 0;
  }

  for (; i < str.length && isNumber(str[i]); i++) {
    val = val * 10 + (str.charCodeAt(i) - 48);
    if (pos && val > upperBound) {
      return upperBound;
    } else if ((!pos) && val > -lowerBound) {
      return lowerBound;
    }
  }
  return pos ? val : -val;
};

console.log(myAtoi('42'));
console.log(myAtoi('         42'));
console.log(myAtoi('         -42'));
console.log(myAtoi('         +42'));
console.log(myAtoi('         '));
console.log(myAtoi(''));
console.log(myAtoi('words and 987'));
console.log(myAtoi('4183 with words'));
console.log(myAtoi('-91283472332 iasfdas '));
console.log(myAtoi('-91283472332'));
console.log(myAtoi('+91283472332'));

