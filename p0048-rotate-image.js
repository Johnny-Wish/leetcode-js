/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  // (i, j) => (i, n - 1 - i)
  const n = matrix.length;
  const next = (i, j) => [j, n - 1 - i];

  for (let i0 = 0; i0 < n / 2; i0 ++) {
    for (let j0 = 0; j0 < Math.floor(n / 2); j0 ++) {
      [i1, j1] = next(i0, j0);
      [i2, j2] = next(i1, j1);
      [i3, j3] = next(i2, j2);
      [matrix[i0][j0], matrix[i1][j1], matrix[i2][j2], matrix[i3][j3]] =
        [matrix[i3][j3], matrix[i0][j0], matrix[i1][j1], matrix[i2][j2]];
      // display(matrix);
    }
  }
};

const display = (matrix) => {
  for (const row of matrix) {
    console.log(row);
  }
  console.log();
}

// matrix = [
  // [11, 12, 13],
  // [21, 22, 23],
  // [31, 32, 33],
// ];
// matrix = [
  // [11, 12, 13, 14],
  // [21, 22, 23, 24],
  // [31, 32, 33, 34],
  // [41, 42, 43, 44],
// ];
// matrix = [
  // [11, 12],
  // [21, 22],
// ];
// matrix = [
  // [11, ],
// ]
matrix = [
  [11, 12, 13, 14, 15],
  [21, 22, 23, 24, 25],
  [31, 32, 33, 34, 35],
  [41, 42, 43, 44, 45],
  [51, 52, 53, 54, 55],
];

display(matrix);
rotate(matrix);
display(matrix);
