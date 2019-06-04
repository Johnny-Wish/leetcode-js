/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false;

  const m = matrix.length;
  const n = matrix[0].length;
  if (target < matrix[0][0] || matrix[m - 1][n - 1] < target) return false;

  let l = 0;
  let r = m - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (matrix[mid][0] < target) {
      l = mid + 1;
    } else if (matrix[mid][0] > target) {
      r = mid - 1;
    } else {
      break;
    }
  }
  const row = Math.floor((l + r) / 2);

  l = 0;
  r = n - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (matrix[row][mid] === target) {
      return true;
    }
    if (matrix[row][mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return false;
};

const matrix = [
  [1, 3, 5, 7],
  [9, 11, 13, 15],
  [17, 19, 21, 23],
];
for (let i = 0; i < 25; i ++) {
  console.log(searchMatrix(matrix, i));
}

