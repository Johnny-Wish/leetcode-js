const encode = (arr) => {
  let ret = '';
  for (const val of arr) {
    ret = ret + val.toString();
  }
  return ret;
};

const decode = (s) => {
  const ret = [];
  for (const char of s) {
    ret.push(char === '1' ? 1 : 0);
  }
  return ret;
};

/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
const prisonAfterNDays = function(cells, N) {
  if (N === 0) return cells;
  const update = (arr) => {
    const next = new Array(8);
    for (let i = 0; i < 8; i ++) {
      next[i] = (arr[i - 1] === arr[i + 1]) ? 1 : 0;
    }
    return next;
  };

  const states = [];
  let start;
  let period;
  states.push(encode(cells));
  for (let day = 1; day < 256; day ++) {
    cells = update(cells);
    if (day === N) return cells;

    const s = encode(cells);
    const lastSeen = states.indexOf(s);
    if (lastSeen === -1) {
      states.push(s);
    } else {
      start = lastSeen;
      period = day - lastSeen;
      break;
    }
  }

  const equivalentN = start + (N - start + period) % period;
  return decode(states[equivalentN]);
};

console.log(prisonAfterNDays([1, 1, 0, 1, 1, 0, 1, 1], 6));
