/**
 * @param {string[]} A
 * @return {number}
 */
const minDeletionSize = function(A) {
  if (A.length === 0 || A[0].length <= 1) return 0;
  const n = A[0].length;
  const dp = new Array(n).fill(1);

  dp[0] = 1;

  for (let i = 1; i < n; i ++) {
    for (let j = 0; j < i; j ++) {
      let success = true;
      for (const s of A) {
        if (s[j] > s[i]) {
          success = false;
          break;
        }
      }
      if (! success) continue;
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }

  return n - Math.max(...dp);
};


console.log(minDeletionSize(['babca', 'bbazb']));
console.log(minDeletionSize(['edcba']));
console.log(minDeletionSize(['ghi', 'def', 'abc']));
