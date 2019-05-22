/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
  if (s === '') {
    return '';
  }

  let longest = '';

  const expandAtCenter = (leftCenter, rightCenter) => {
    let left = leftCenter;
    let right = rightCenter;

    if (s[left] != s[right]) {
      return '';
    }

    do {
      left --;
      right ++;
    } while (0 <= left && right < s.length && s[left] === s[right]);

    left ++;
    right --;
    return s.substring(left, right + 1);
  };

  const updateLongestString = (str) => {
    if (str.length > longest.length) {
      longest = str;
    }
  };

  for (let i = 0; i < s.length; i ++) {
    updateLongestString(expandAtCenter(i, i));
    if (i + 1 === s.length) {
      break;
    }
    updateLongestString(expandAtCenter(i, i + 1));
  }
  return longest;
};

console.log(longestPalindrome('dbabbad'));
