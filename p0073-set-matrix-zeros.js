/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return;
  const m = matrix.length;
  const n = matrix[0].length;
  const zeroRows = new Array(m).fill(false);
  const zeroCols = new Array(n).fill(false);
  for (let i = 0; i < m; i ++) {
    for (let j = 0; j < n; j ++) {
      if (matrix[i][j] === 0) {
        zeroRows[i] = true;
        zeroCols[j] = true;
      }
    }
  }
  // in-place modification
  for (let i = 0; i < m; i ++) {
    for (let j = 0; j < n; j ++) {
      if (zeroRows[i] || zeroCols[j]) {
        matrix[i][j] = 0;
      }
    }
  }
};


matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]
setZeroes(matrix);
console.log(matrix);
matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]
setZeroes(matrix);
console.log(matrix);
