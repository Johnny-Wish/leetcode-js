/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
  m --;
  n --;
  total = m + n;
  chosen = Math.min(m, n);
  combination = 1;
  for (let k = 0; k < chosen; k ++) {
    combination *= (total - k);
  }
  for (let k = 1; k <= chosen; k ++) {
    combination /= k;
  }
  return combination;
};


console.log(uniquePaths(7, 3));
console.log(uniquePaths(3, 2));
