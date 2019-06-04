/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function(s, t) {
  const counter = new Map();
  for (const char of t) {
    const n = counter.get(char);
    if (n === undefined) {
      counter.set(char, 1);
    } else {
      counter.set(char, n + 1);
    }
  }

  console.log(counter);
  const tracker = new Map();
  for (const char of counter.keys()) {
    tracker.set(char, []);
  }

  const getLeftmost = () => {
    let leftmost = Infinity;
    for (const v of tracker.values()) {
      // console.log(`value`, v);
      leftmost = Math.min(leftmost, v[0]);
    }
    return leftmost;
  };

  let left;
  let minLeft = -Infinity;
  let minRight = Infinity;
  let matchCount = 0;
  for (let right = 0; right < s.length; right ++) {
    const char = s[right];

    if (!counter.has(char)) continue;

    const arr = tracker.get(char);
    matchCount ++;
    arr.push(right);

    if (arr.length > counter.get(char)) {
      arr.shift();
      matchCount --;
    }

    if (matchCount < t.length) continue;

    left = getLeftmost();
    console.log(`char=${char}`, tracker);

    console.log(`right = ${right}, left=${left}, minRight = ${minRight}, minLeft = ${minLeft}`);
    if ((right - left) < (minRight - minLeft)) {
      minRight = right;
      minLeft = left;
      console.log(`updated to ${s.substring(minLeft, minRight + 1)}`);
    } else {
      console.log(`retained ${s.substring(minLeft, minRight + 1)}`);
    }
  }

  if (minLeft < 0) {
    return '';
  } else {
    return s.substring(minLeft, minRight + 1);
  }
};

// S = "ADOBECODEBANC"
// T = "ABBC"
// S = 'A'
// T = 'A'
// S = 'AB'
// T = 'B'
// S = 'AAB';
// T = 'BA';
// S = 'BBAA'
// T = 'ABA'
console.log(minWindow(S, T));
