/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => (a - b));
  const solutions = [];

  function dfs(currentIndex, residual, sol) {
    if (residual === 0) {
      solutions.push(sol);
    }
    if (currentIndex > 0 && residual < candidates[currentIndex]) {
      return;
    }
    let lastUsed = null;
    for (let i = currentIndex + 1; i < candidates.length; i ++) {
      // do not use the same element again in this call
      // let reuse be handled in next calls
      while (candidates[i] === lastUsed) {
        i ++;
        if (i === candidates.length) {
          return;
        }
      }

      const candidate = candidates[i];
      lastUsed = candidate;
      if (residual < candidate) {
        return;
      }
      dfs(i, residual - candidate, [...sol, candidate]);
    }
  }
  dfs(-1, target, []);
  return solutions; 
};

console.log(combinationSum2([3, 12, 9, 11, 6, 7, 8, 5, 4], 15));
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
