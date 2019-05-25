/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // a util function that returns the number at row i, column j
  // '1'~'9' are mapped to 0~8 for the numbers to be 0-indexed
  // if '.' is encountered, return null
  const getNumber = (i, j) => {
    const char = board[i][j];
    if (char === '.') {
      return null;
    }
    return char - '0' - 1;
  }

  // a util function that checks if a certain row is valid given its index
  const checkRow = (index) => {
    const used = new Array(9);
    used.fill(false);
    for (let i = 0; i < 9; i ++) {
      const number = getNumber(index, i);
      if (number === null) {
        continue;
      }
      if (used[number]) {
        return false;
      }
      used[number] = true;
    }
    return true;
  }

  // a util function that checks if a certain column is valid given its index
  const checkColumn = (index) => {
    const used = new Array(9);
    used.fill(false);
    for (let i = 0; i < 9; i ++) {
      const number = getNumber(i, index);
      if (number === null) {
        continue;
      }
      if (used[number]) {
        return false;
      }
      used[number] = true;
    }
    return true;
  }

  // a util function that checks if a certain sub-box is valid given its upper
  // left coordinate 
  const checkSubBox = (upper, left) => {
    const used = new Array(9);
    used.fill(false);
    for (let i = upper; i < upper + 3; i ++) {
      for (let j = left; j < left + 3; j ++) {
        const number = getNumber(i, j);
        if (number === null) {
          continue;
        }
        if (used[number]) {
          return false;
        }
        used[number] = true;
      }
    } 
    return true;
  }

  // check each row
  for (let row = 0; row < 9; row ++) {
    if (! checkRow(row)) {
      return false;
    }
  }

  // check each column
  for (let column = 0; column < 9; column ++) {
    if (! checkColumn(column)) {
      return false;
    }
  }

  // check each sub box
  for (let upper = 0; upper < 9; upper += 3) {
    for (let left = 0; left < 9; left += 3) {
      if (! checkSubBox(upper, left)){
        return false;
      }
    }
  }

  // all checks passed
  return true;
};


const board1 = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];
console.log(isValidSudoku(board1));

const board2 = [
  ["7","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];
console.log(isValidSudoku(board2));
