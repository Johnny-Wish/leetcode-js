/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = function(board) {
  const chars = '123456789';

  const check = (i, j, char) => {
    for (let otherIndex = 0; otherIndex < 9; otherIndex ++) {
      if (board[i][otherIndex] === char || board[otherIndex][j] === char) {
        return false;
      }
    }
    upper = Math.floor(i / 3) * 3;
    left = Math.floor(j / 3) * 3;
    for (let row = upper; row < upper + 3; row ++) {
      for (let col = left; col < left + 3; col ++) {
        if (board[row][col] === char) {
          return false;
        }
      }
    }
    return true;
  };

  const next = (i, j) => (j === 8) ? [i + 1, 0] : [i, j + 1];

  function dfs(i, j) {
    if (i === 9) {
      return true;
    }

    if (board[i][j] !== '.') { // if given, don't make attempts
      return dfs(...next(i, j));
    }

    for (const ch of chars) {
      if (check(i, j, ch)) {
        board[i][j] = ch;
        const success = dfs(...next(i, j));
        if (success) {
          return true;
        }
        board[i][j] = '.';
      }
    }

    return false;
  }

  return dfs(0, 0);
};
