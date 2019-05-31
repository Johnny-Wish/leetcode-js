/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = function(n, k) {
  k --;
  const numbers = new Array(n).fill(0);
  for (let i = 0; i < n; i ++) {
    numbers[i] = i + 1;
  }
  // console.log(numbers);

  const factorials = new Array(n); // factorials[k] = k!
  factorials[0] = 1;
  for (let i = 1; i < n; i ++) {
    factorials[i] = factorials[i - 1] * i;
  }
  // console.log(factorials);

  let perm = '';
  for (let ord = factorials.length - 1; ord >= 0; ord --) {
    const idx = Math.floor(k / factorials[ord]);
    // console.log(`ord=${ord}, k=${k}, idx=${idx}, facto=${factorials[ord]}`);
    perm += numbers[idx];
    numbers.splice(idx, 1);
    // console.log(`modified numbers = ${numbers}`);
    k %= factorials[ord];
    // console.log();
  }

  return perm;
};


for (let k = 1; k <= 24; k ++) {
  console.log(getPermutation(4, k));
}

