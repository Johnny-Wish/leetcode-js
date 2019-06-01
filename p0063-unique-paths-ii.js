/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid.length === 0) {
    return 0;
  }
  const n = obstacleGrid.length;
  if (obstacleGrid[0].length === 0) {
    return 0;
  }
  const m = obstacleGrid[0].length;
  for (let i = 0; i < n; i ++) {
    for (let j = 0; j < m; j ++) {
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = -1;
        continue;
      }
      if (i === 0 && j === 0) {
        obstacleGrid[i][j] = 1;
        continue;
      }
      let upper = (i === 0) ? 0 : obstacleGrid[i - 1][j];
      let left = (j === 0) ? 0: obstacleGrid[i][j - 1];
      upper = Math.max(upper, 0);
      left = Math.max(left, 0);
      obstacleGrid[i][j] = upper + left;
    }
  }
  // console.log(obstacleGrid);
  return Math.max(obstacleGrid[n - 1][m - 1], 0);
};

obstacleGrid = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
console.log(uniquePathsWithObstacles(obstacleGrid));
