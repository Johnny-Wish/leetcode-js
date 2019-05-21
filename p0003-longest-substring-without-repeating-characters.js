/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  const lastSeen = new Map();
  let maxLen = 0;
  for (let i = 0, j = 0; j < s.length; j ++) {
    const char = s.charAt(j);
    const prev = lastSeen.get(char);

    if (prev !== undefined && prev >= i) {
      i = prev + 1;
    }
    maxLen = Math.max(maxLen, j - i + 1);
    console.log(`${i}=${s.charAt(i)}, ${j}=${s.charAt(j)}, ${s.substring(i, j+1)}`);
    lastSeen.set(char, j);
  }
  return maxLen;
}

console.log(lengthOfLongestSubstring('1234'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('bbbbbb'));
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring('abba'));
