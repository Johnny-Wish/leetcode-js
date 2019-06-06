/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
const indexPairs = function(text, words) {
  const pairs = [];

  for (const w of words) {
    let i = -1;
    while (true) {
      i = text.indexOf(w, i + 1);
      if (i === -1) {
        break; 
      }
      pairs.push([i, i + w.length - 1]);
    }
  }

  pairs.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  })
  return pairs;
};

text = 'thestoryofleetcodeandme';
words = ['story', 'fleet', 'leetcode'];
console.log(indexPairs(text, words));

text = 'ababa';
words = ['ab', 'aba'];
console.log(indexPairs(text, words));

text = 'ababa';
words = ['ab', 'aba'];
console.log(indexPairs(text, words));

text = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
words = ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaa"]
console.log(indexPairs(text, words));
