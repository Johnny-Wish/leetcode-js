/**
 * @param {number} n
 * @return {number[]}
 */
const generateMatrix = function(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [[1]];
  }

  const matrix = [];
  for (let i = 0; i < n; i ++) {
    matrix.push(new Array(n).fill(0));
  }
  // console.log(matrix);
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let d = 0;
  let count = 0;
  let i0 = 0;
  let j0 = -1;
  let failures = 0;
  while (count < n * n) {
    // console.log(`d=${d}, direction=${directions[d]}`);
    const [di, dj] = directions[d];
    const i = i0 + di;
    const j = j0 + dj;
    if (i < 0 || i >= n || j < 0 || j >= n || matrix[i][j] !== 0) {
      failures ++;
      // console.log('direction failed, continue to the next iter');
      if (failures >= 2) {
        throw RuntimeError('two failures in a row');
      }
      d ++;
      d %= 4;
      continue;
    }
    failures = 0;
    matrix[i][j] = ++ count;
    i0 = i;
    j0 = j;
    // console.log('matrix is now', matrix);
  }
  return matrix;
};

console.log(generateMatrix(1));
console.log(generateMatrix(2));
console.log(generateMatrix(3));
console.log(generateMatrix(4));
console.log(generateMatrix(5));
