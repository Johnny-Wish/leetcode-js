/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const isScramble = function(s1, s2) {
  // console.log(`checking '${s1}' and '${s2}'`);
  if (s1 === s2) return true;
  if (s1.length !== s2.length) return false;
  if (s1.length === 1) return (s1 === s2);

  const deltas = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i ++) {
    const id1 = getLetterIndex(s1[i]);
    const id2 = getLetterIndex(s2[i]);
    deltas[id1] ++;
    deltas[id2] --;
  }

  for (const delta of deltas) {
    if (delta !== 0) {
      return false;
    }
  }

  for (let split = 1; split < s1.length; split ++) {
    const left1 = s1.substring(0, split);
    const right1 = s1.substring(split);
    const left2 = s2.substring(0, split);
    const right2 = s2.substring(split);
    if (isScramble(left1, left2) && isScramble(right1, right2)) return true;

    const left3 = s2.substring(0, s2.length - split);
    const right3 = s2.substring(s2.length - split);
    if (isScramble(left1, right3) && isScramble(right1, left3)) return true;
  }

  return false;
};

const getLetterIndex = (char) => char - 'a';

console.log(isScramble('great', 'rgeat'));
console.log(isScramble('', ''));
console.log(isScramble('a', 'a'));
console.log(isScramble('a', 'b'));
console.log(isScramble('ab', 'ba'));
console.log(isScramble('abc', 'dba'));
console.log(isScramble('abb', 'bba'));
