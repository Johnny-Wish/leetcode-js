/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  const upperBound = 2 ** 31 - 1;
  const lowerBound = - (2 ** 31);

  if (x === 0) {
    return 0;  // returns 0 if overflowed
  }

  let neg = false;
  if (x < 0) {
    neg = true;
    x = -x;
  }
  let y = 0;
  while (x !== 0) {
    lastDigit = x % 10;
    y = y * 10 + lastDigit;
    x = Math.floor(x / 10);
  }
  y = neg ? -y : y;
  if (y > upperBound || y < lowerBound) {
    y = 0;
  }
  return y;
};

console.log(reverse(12345));
