/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function(matrix) {
  if (matrix.length === 0) {
    return [];
  }
  const n = matrix.length;
  if (matrix[0].length === 0) {
    return [];
  }
  const m = matrix[0].length;

  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const elementCount = matrix.length * matrix[0].length;
  const spiral = [];
  let i = 0;
  let j = -1;
  let d = 0;
  let iMoves = n - 1;
  let jMoves = m;
  while (true) {
    [di, dj] = directions[d];
    const moves = (di === 0) ? jMoves : iMoves;
    for (let m = 0; m < moves; m ++) {
      i += di;
      j += dj;
      spiral.push(matrix[i][j]);
      if (spiral.length === elementCount) return spiral;
    }
    if (di === 0) {
      jMoves --;
    } else {
      iMoves --;
    }
    d += 1;
    d %= 4;
  }
  return spiral;
};

matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
// matrix = [
//   [1, 2],
//   [3, 4],
// ];
matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(spiralOrder(matrix));
