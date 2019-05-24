/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  if (needle === '') {
    return 0;
  }
  for (let i = 0; i <= haystack.length - needle.length; i ++) {
    let success = true;
    for (let k = 0; k < needle.length; k ++) {
      if (haystack[i + k] !== needle[k]) {
        success = false;
        break;
      }
    }
    if (success) {
      return i;
    }
  }
  return -1;
};


console.log(strStr('aaaa', 'bba'));
