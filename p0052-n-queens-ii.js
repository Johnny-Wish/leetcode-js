/**
 * @param {number} n
 * @return {string[][]}
 */
const totalNQueens = function(n) {
  let solutionCounts = 0;
  const colUsed = new Array(n).fill(false);
  const check = (positions, p) => {
    for (let row = 0; row < positions.length; row ++) {
      if (positions.length - row === Math.abs(positions[row] - p)) {
        return false;
      }
    }
    return true;
  };

  function dfs(positions) {
    if (positions.length === n) {
      solutionCounts ++;
      return;
    }

    for (let p = 0; p < n; p ++) {
      if (colUsed[p]) continue;
      if (! check(positions, p)) continue;
      colUsed[p] = true;
      dfs([...positions, p]);
      colUsed[p] = false;
    }
  }

  dfs([]);
  return solutionCounts;
};

console.log(solveNQueens(5));
