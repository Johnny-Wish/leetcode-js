/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function(n) {
  if (n === 0 || n === 1) return 1;

  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i ++) {
    for (let j = 0; j < i; j ++) {
      dp[i] += dp[j] * dp[i - 1 - j];
    }
  }

  return dp[n];
};


console.log(numTrees(0));
console.log(numTrees(1));
console.log(numTrees(2));
console.log(numTrees(3));
console.log(numTrees(4));
console.log(numTrees(5));
