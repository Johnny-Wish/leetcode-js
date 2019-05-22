/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  if (x < 0) {
    return false;
  } else if (x === 0) {
    return true;
  }

  const stack = [];
  while (x !== 0) {
    const digit = x % 10;
    stack.push(digit);
    x = Math.floor(x / 10);
  }

  for (let i = 0, j = stack.length - 1; i < j;) {
    if (stack[i] != stack[j]) {
      return false;
    }
    i ++;
    j --;
  }
  return true;
};

console.log(isPalindrome(1231));
console.log(isPalindrome(121));
console.log(isPalindrome(14241));
console.log(isPalindrome(0));
console.log(isPalindrome(10));
console.log(isPalindrome(333333));
console.log(isPalindrome(-10));
