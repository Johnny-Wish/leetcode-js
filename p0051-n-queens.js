/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function(n) {
  const solutions = [];
  const paint = (positions) => {
    const canvas = [];
    for (const pos of positions) {
      let row = '';
      for (let col = 0; col < n; col ++) {
        if (col === pos) {
          row += 'Q';
        } else {
          row += '.';
        }
      }
      canvas.push(row);
    }
    return canvas;
  };

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
      solutions.push(paint(positions));
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
  return solutions;
};

console.log(solveNQueens(5));
