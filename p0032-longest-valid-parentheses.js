/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function(s) {
  const stack = [-1];
  let ret = 0;
  for (let i = 0; i < s.length; i ++ ) {
    const char = s[i];
    if (char === '(') {
      stack.push(i);
      continue;
    }

    stack.pop();
    if (stack.length === 0) {
      stack.push(i);
    } else {
      ret =Math.max(ret, i - stack[stack.length - 1])
    }
  }
  return ret;
};


console.log(longestValidParentheses(')()()('));
console.log(longestValidParentheses('()(()'));
console.log(longestValidParentheses(''));
