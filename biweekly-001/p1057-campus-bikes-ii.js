/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
const assignBikes = function(workers, bikes) {
  const dist = (w, b) => {
    return Math.abs(workers[w][0] - bikes[b][0]) +
        Math.abs(workers[w][1] - bikes[b][1]);
  }

  const mem = new Array(workers.length);
  for (let i = 0; i < workers.length; i ++) {
    mem[i] = new Array(bikes.length);
    for (let j = 0; j < bikes.length; j ++) {
      mem[i][j] = dist(i, j);
    }
  }

  const taken = new Array(bikes.length).fill(false);
  let min = Infinity;

  function dfs(w, total) {
    if (total > min) {
      return;
    }

    if (w >= workers.length) {
      min = total;
      return;
    }

    for (let b = 0; b < bikes.length; b ++) {
      if (taken[b]) continue;
      taken[b] = true;
      dfs(w + 1, total + mem[w][b]);
      taken[b] = false;
    }
  }

  dfs(0, 0);
  return min;
};


workers = [[0,0],[1,1],[2,0]];
bikes = [[1,0],[2,2],[2,1]];
console.log(assignBikes(workers, bikes));
workers = [[0,0],[2,1]];
bikes = [[1,2],[3,3]]
console.log(assignBikes(workers, bikes));
