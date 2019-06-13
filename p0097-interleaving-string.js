/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
const isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  if (s1 === '') return s2 === s3;
  if (s2 === '') return s1 === s3;
  if (s3[0] !== s1[0] && s3[0] !== s2[0]) return false;
  if (s1[0] === s3[0] && isInterleave(s1.substring(1), s2, s3.substring(1))) {
    return true;
  }
  if (s2[0] === s3[0] && isInterleave(s1, s2.substring(1), s3.substring(1))) {
    return true;
  }
  return false;
};

console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'));
console.log(isInterleave('aabcc', 'dbbca', 'aadbbbaccc'));
