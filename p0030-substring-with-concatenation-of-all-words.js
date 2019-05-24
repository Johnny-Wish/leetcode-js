/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function(s, words) {
  const map = new Map();
  let wordLength = 0;
  for (let i = 0; i < words.length; i ++) {
    const word = words[i];
    wordLength += word.length;
    let pos = -1;
    while (true) {
      pos = s.indexOf(word, pos + 1);
      if (pos === -1) {
        break;
      }
      if (map.has(pos)) {
        map.get(pos).push(i);
      } else {
        map.set(pos, [i]);
      }
    }
  }
  if (wordLength > s.length) {
    return [];
  }
  visited = new Array(words.length);
  visited.fill(false);

  /**
   * @param {number} position
   * @param {number} index
   * @param {number} count
   * @return {boolean}
   */
  function dfs(position, index, count) {
    visited[index] = true;
    if (count === words.length) {
      visited[index] = false;
      return true;
    }

    const nextPosition = position + words[index].length;
    const nextIndices = map.get(nextPosition);
    if (nextIndices === undefined) {
      visited[index] = false;
      return false;
    }
    for (const nextIndex of map.get(nextPosition)) {
      if (visited[nextIndex]) {
        continue;
      }
      const success = dfs(nextPosition, nextIndex, count + 1);
      if (success) {
        visited[index] = false;
        return true;
      }
    }
    visited[index] = false;
    return false;
  }

  const validPositions = [];
  for (const [position, indices] of map) {
    let success = false;
    visited.fill(false);
    for (index of indices) {
      if (dfs(position, index, 1)) {
        success = true;
        break;
      }
    }
    if (success) {
      validPositions.push(position);
    }
  }
  return validPositions;
};


s = 'wordgoodgoodgoodbestword';
words = ['word', 'good', 'best', 'word'];
console.log(findSubstring(s, words));

s = 'barfoothefoobarman';
words = ['bar', 'foo'];
console.log(findSubstring(s, words));

s = 'foobarfoobar';
words = ['foo', 'bar'];
console.log(findSubstring(s, words));

