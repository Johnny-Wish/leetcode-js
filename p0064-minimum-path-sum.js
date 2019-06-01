/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function(grid) {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  const n = grid.length;
  const m = grid[0].length;
  for (let i = 0; i < n; i ++) {
    for (let j = 0; j < m; j ++) {
      if (i === 0 && j === 0) {
        continue;
      }
      const upper = (i === 0) ? Infinity : grid[i - 1][j];
      const left = (j === 0) ? Infinity : grid[i][j - 1];
      grid[i][j] += Math.min(upper, left);
    }
  }
  return grid[n - 1][m - 1];
};

grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]

console.log(minPathSum(grid));
