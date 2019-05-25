/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
  candidates.sort((a, b) => (a - b));
  const solutions = [];

  function dfs(currentIndex, residual, sol) {
    if (residual === 0) {
      solutions.push(sol);
    }
    if (residual < candidates[currentIndex]) {
      return;
    }
    for (let i = currentIndex; i < candidates.length; i ++) {
      const candidate = candidates[i];
      if (residual < candidate) {
        return;
      }
      dfs(i, residual - candidate, [...sol, candidate]);
    }
  }
  dfs(0, target, []);
  return solutions; 
};

console.log(combinationSum([3, 12, 9, 11, 6, 7, 8, 5, 4], 15));
// console.log([3, 12, 9, 11, 6, 7, 8, 5, 4].sort((a, b) => (a - b)))
