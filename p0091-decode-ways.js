/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function(s) {
  if (s === '') return 0;
  if (s[0] === '0') return 0;
  if (s.length <= 1) return 1;
  const single = new Array(s.length).fill(0);
  const double = new Array(s.length).fill(0);

  double[-1] = 1;
  single[-1] = 0;

  for (let i = 1; i < s.length; i ++) {
    if (s.charCodeAt(i) !== 48) {
      single[i] = single[i - 1] + double[i - 1];
    }
    if ((s[i - 1] === '2' && s.charCodeAt(i) <= 48 + 6) || (s[i-1]==='1')) {
      double[i] = single[i - 2] + double[i - 2];
    }
    console.log(`single[${i}] = ${single[i]}, double[${i}] = ${double[i]}`);
  }
  return single[s.length - 1] + double[s.length - 1];
};

console.log(numDecodings('0111111'));
// 1 1 1 1
// 1 1 11
// 1 11 1
// 11 1 1
// 11 11

