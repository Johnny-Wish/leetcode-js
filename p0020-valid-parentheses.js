/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const stack = [];
  const map = new Map();
  map.set(')', '(');
  map.set(']', '[');
  map.set('}', '{');

  for (const char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      const other = map.get(char);
      const top = stack.pop();
      if (top != other) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid('([]{})[{}]()'));
