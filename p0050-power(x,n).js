/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function(x, n) {
  if (n < 0) return Math.pow(x, n);
  if (x === 0) return 0;
  if (n === 0 || x === 1) return 1;
  if (n === 1) return x;

  const half = Math.floor(n / 2);
  const odd = n % 2;
  const sqrt = myPow(x, half);
  if (odd === 1) {
    return sqrt * sqrt * x;
  } else {
    return sqrt * sqrt;
  }
};

console.log(myPow(2, 11));
console.log(myPow(3, 5));
console.log(myPow(2, -4));
