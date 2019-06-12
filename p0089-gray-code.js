/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode = function(n) {
  if (n === 0) return [0];
  const codes = [0];
  for (let i = 0; i < n; i ++) {
    const prependix = codes.length;
    for (let c = codes.length - 1; c >= 0; c --) {
      codes.push(codes[c] + prependix);
    }
  }
  return codes;
};

console.log(grayCode(0));
console.log(grayCode(1));
console.log(grayCode(2));
console.log(grayCode(3));
console.log(grayCode(4));
