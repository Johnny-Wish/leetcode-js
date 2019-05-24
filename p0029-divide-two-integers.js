/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function(dividend, divisor) {
  const upperBound = 2 ** 31 - 1;
  const lowerBound = - (upperBound + 1)
  let pos;
  if (divisor === 0) {
    return NaN;
  } else if (divisor < 0) {
    pos = false;
    divisor = -divisor;
  } else {
    pos = true;
  }
  if (dividend === 0) {
    return 0;
  } else if (dividend < 0) {
    pos = ! pos;
    dividend = dividend.toString().substring(1);
  } else {
    dividend = dividend.toString();
  }

  let remainder = 0;
  let quotient = 0;
  for (let i = 0; i < dividend.length; i ++) {
    remainder = remainder * 10 + dividend.charCodeAt(i) - 48;
    quotientBit = 0;
    while (remainder >= divisor) {
      quotientBit ++;
      remainder -= divisor;
    }
    quotient = quotient * 10 + quotientBit;
  }
  quotient = pos ? quotient : -quotient;
  if (lowerBound <= quotient && quotient <= upperBound) {
    return quotient;
  } else {
    return upperBound;
  }
};


console.log(divide(17, 3));
