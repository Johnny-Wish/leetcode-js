/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function(n, k) {
  if (k > n) {
    return [];
  }
  const ret = [];

  function dfs(current, idx) {
    if (current.length === k) {
      ret.push(current);
      return;
    }
    if (idx > n) {
      return;
    }

    dfs([...current, idx], idx + 1);
    dfs([...current], idx + 1);
  }

  dfs([], 1);
  return ret;
};

console.log(combine(5, 6));
console.log(combine(1, 1));
console.log(combine(1, 0));
console.log(combine(4, 2));

