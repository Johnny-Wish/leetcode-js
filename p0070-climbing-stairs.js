/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  if (n <= 1) {
    return n;
  }

  let a = 1;
  let b = 1;
  let c = 2;
  for (let i = 2; i <= n; i ++) {
    c = a + b;
    a = b;
    b = c;
    console.log(a, b, c);
  }
  return c;
};


console.log(climbStairs(4));
