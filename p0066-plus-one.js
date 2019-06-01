/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  let carry = true;
  for (let i = digits.length - 1; i >= 0; i --) {
    if (!carry) {
      return digits;
    }
    digits[i] ++;
    if (digits[i] >= 10) {
      digits[i] %= 10;
      carry = true;
    } else {
      carry = false;
    }
  }
  if (carry) {
    digits.unshift(1);
  }

  return digits;
};


console.log(plusOne([0]));
