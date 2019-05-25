/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function(s, p) {
  const mem = [];
  for (let i = 0; i <= s.length; i ++) {
    mem.push([]);
    for (let j = 0; j <= p.length; j ++) {
      mem[i].push(null);
    }
  }

  function match(i, j) {
    if (mem[i][j] !== null) {
      return mem[i][j];
    }

    if (j === p.length) {
      mem[i][j] = i === s.length;
      return mem[i][j];
    }

    if (i === s.length) {
      for (let k = j; k < p.length; k ++) {
        if (p[k] !== '*') {
          mem[i][j] = false;
          return false;
        }
      }
      mem[i][j] = true;
      return true;
    }

    if (p[j] === '?' ) {
      mem[i][j] = match(i + 1, j + 1);
    } else if (p[j] === '*') {
      mem[i][j] = match(i, j + 1) || match(i + 1, j);
    } else {
      mem[i][j] = (s[i] === p[j]) && match(i + 1, j + 1);
    }
    return mem[i][j];
  }

  const result = match(0, 0);
  return result;
};

console.log('following should be true');
console.log(isMatch('', ''));
console.log(isMatch('', '*'));
console.log(isMatch('abc', 'abc'));
console.log(isMatch('abc', '?bc'));
console.log(isMatch('abc', 'a?c'));
console.log(isMatch('abc', 'ab?'));
console.log(isMatch('abc', '*'));
console.log(isMatch('abc', '*c'));
console.log(isMatch('abc', '*bc'));
console.log(isMatch('abc', '*abc'));
console.log(isMatch('c', '***********'));
console.log(isMatch('c', '****?*******'));

console.log('following should be false');
console.log(isMatch('c', '****?****?**'));
console.log(isMatch('abc', '*cd'));
console.log(isMatch('a', ''));
console.log(isMatch('aaabbbaabaaaaababaabaaabbabbbbbbbbaabababbabbbaaaaba',
'a*******b'));
