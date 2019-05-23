/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
  const strings = [];

  function formString(s, leftCount, rightCount) {
    if (leftCount > n || rightCount > leftCount) {
      return;
    }
    if (s.length === n * 2) {
      strings.push(s);
    }
    formString(s + '(', leftCount + 1, rightCount);
    formString(s + ')', leftCount, rightCount + 1);
  }

  formString('', 0, 0);
  return strings;
};

console.log(generateParenthesis(3));
