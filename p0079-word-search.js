/**
 * exist
 *
 * @param {string[][]} board board
 * @param {string} word word
 * @returns {boolean}
 */
const exist = function(board, word) {
  if (board.length === 0 || board[0].length === 0) return false;
  const m = board.length;
  const n = board[0].length;

  const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const visited = new Array(m);
  for (let i = 0; i < m; i ++) {
    visited[i] = new Array(n).fill(false);
  }

  /**
   * depth first search
   *
   * @param {number} i0 row index
   * @param {number} j0 column index
   * @param {number} current current char index
   * @return {boolean} whether search is successful
   */
  function dfs(i0, j0, current) {
    // console.log(`searching ${i0}, ${j0}`);
    if (current === word.length) return true;
    if (word[current] !== board[i0][j0]) return false;
    if (current === word.length - 1) return true;

    for (let k = 0; k < 4; k ++) {
      const [di, dj] = direction[k];
      const i = i0 + di;
      const j = j0 + dj;

      if (i < 0 || i >= m || j < 0 || j >= n) continue;
      if (visited[i][j]) continue;
      // console.log(`looking at ${i}, ${j}`);

      visited[i][j] = true;
      const success = dfs(i, j, current + 1);
      visited[i][j] = false;

      if (success) return true;
    }
    return false;
  }

  for (let i = 0; i < m; i ++) {
    for (let j = 0; j < n; j ++) {
      visited[i][j] = true;
      // console.log(visited);
      const success = dfs(i, j, 0);
      visited[i][j] = false;
      // console.log(visited);
      // console.log(success? 'success': 'failure');
      if (success) {
        return true;
      }
    }
  }

  return false;
};

board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];
console.log(exist(board, 'ABCCED'));
console.log(exist(board, 'SEE'));
console.log(exist(board, 'ABCB'));
console.log(exist([['a']], 'a'));
