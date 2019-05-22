/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function(s, p) {
  const dp = [];
  for (let i = 0; i <= s.length; i ++) {
    dp.push([]);
    for (let j = 0; j <= p.length; j ++) {
      dp[i].push(false);
    }
  }
  dp[s.length][p.length] = true;

  for (let i = s.length; i >= 0; i --) {
    for (let j = p.length - 1; j >= 0; j --) {
      const firstMatch = i < s.length && (s[i] == p[j] || p[j] === '.');
      if (j + 1 < p.length && p[j + 1] === '*') {
        dp[i][j] = dp[i][j + 2] || (firstMatch && dp[i + 1][j]);
      } else {
        dp[i][j] = firstMatch && dp[i + 1][j + 1];
      }
      if (dp[i][j]) {
        console.log(`${s.substring(i)} <=== ${p.substring(j)}`);
      }
    }
  }

  return dp[0][0];
};

console.log(isMatch('123456', '1.*6'));
