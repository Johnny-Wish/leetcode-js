/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const period = numRows * 2 - 2;
  let ret = '';

  // handles the first line
  for (let i = 0; i < s.length; i += period) {
    ret += s[i];
  }

  // handles lines in middle
  for (let k = 1; k < numRows - 1; k++){
    for (let i = k; i < s.length; null){
      ret += s[i];

      i += (period - 2 * k);
      if (i < s.length) {
        ret += s[i]
      }

      i += 2 * k;
    }
  }

  // handles the last line
  for (let i = numRows - 1; i < s.length; i+= period) {
    ret += s[i];
  }

  return ret;
};

console.log(convert('PAYPALISHIRING', 4));
console.log(convert('A', 1));

// x    x
// x   xx
// x  x x
// x x  x
// xx   x
// x    x
