/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function(word1, word2) {
  if (word1.length === 0 || word2.length === 0) {
    return Math.max(word1.length, word2.length);
  }

  const f = new Array(word1.length + 1);
  for (let i = 0; i <= word1.length; i ++) {
    f[i] = new Array(word2.length + 1);
  }

  for (let i = 0; i <= word1.length; i ++) {
    for (let j = 0; j <= word2.length; j ++) {
      if (i === 0 || j === 0) {
        f[i][j] = Math.max(i, j);
        continue;
      }
      const flag = (word1[i - 1] === word2[j - 1]) ? 0 : 1;
      f[i][j] = Math.min(f[i][j - 1] + 1, f[i - 1][j] + 1, f[i - 1][j - 1] + flag);
    }
  }

  return f[word1.length][word2.length];
};

console.log(minDistance('horse', 'ros'));
console.log(minDistance('intention', 'execution'));
console.log(minDistance('aaa', 'xaaa'));
