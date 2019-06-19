/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const isScramble = function(s1, s2) {
  // console.log(`checking '${s1}' and '${s2}'`);
  if (s1 === s2) return true;
  if (s1.length !== s2.length) return false;
  if (s1.length === 1) return s1 === s2;
  if (s1.length === 2) return s1 === s2 || (s1[0] === s2[1] && s1[1] === s2[0]);

  const deltas = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    deltas[s1.charCodeAt(i) - 97]++;
    deltas[s2.charCodeAt(i) - 97]--;
  }

  for (const delta of deltas) {
    if (delta !== 0) {
      console.log(`'${s1}' and '${s2}' differ`);
      return false;
    }
  }

  for (let i = 1; i < s1.length; i++) {
    if (
      isScramble(s1.substring(0, i), s2.substring(0, i)) &&
      isScramble(s1.substring(i), s2.substring(i))
    ) {
      console.log(`'${s1}' and '${s2}' match`);
      return true;
    }

    if (
      isScramble(s1.substring(0, i), s2.substring(s2.length - i)) &&
      isScramble(s1.substring(i), s2.substring(0, s2.length - i))
    ) {
      console.log(`'${s1}' and '${s2}' match`);
      return true;
    }
  }

  console.log(`'${s1}' and '${s2}' differ`);
  return false;
};


// console.log(isScramble('great', 'rgeat'));
// console.log(isScramble('', ''));
// console.log(isScramble('a', 'a'));
// console.log(isScramble('a', 'b'));
// console.log(isScramble('ab', 'ba'));
// console.log(isScramble('abc', 'dba'));
// console.log(isScramble('abb', 'bba'));

console.log(isScramble('abcdefghijklmn', 'efghijklmncadb'));
