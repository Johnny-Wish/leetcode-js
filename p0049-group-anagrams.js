/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  const map = new Map();
  const letters = 'abcdefghijklmnopqrstuvwxyz';

  for (const str of strs) {
    const counts = new Array(26).fill(0);
    for (let i = 0; i < str.length; i ++) {
      counts[str.charCodeAt(i) - 97] ++;
    }
    let key = '';
    for (let index = 0; index < 26; index ++) {
      for (let count = 0; count < counts[index]; count ++) {
        key += letters[index];
      }
    }
    if (map.has(key)) {
      map.get(key).push(str);
    } else {
      map.set(key, [str]);
    }
  }

  // console.log(map);
  groups = [];
  for (const words of map.values()) {
    groups.push(words);
  }
  return groups;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
