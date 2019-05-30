/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function(intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval];
  }

  let i;
  for (i = 0; i < intervals.length; i ++) {
    if (intervals[i][0] >= newInterval[0]) {
      break;
    }
  }
  intervals.splice(i, 0, newInterval);

  displayIntervals(intervals);

  let current = [intervals[0][0], intervals[0][0]]
  const ret = [];
  for (const itv of intervals) {
    if (current[1] < itv[0]) {
      ret.push(current);
      current = [itv[0], itv[1]];
    } else {
      current[1] = Math.max(current[1], itv[1]);
    }
  }
  ret.push(current);
  return ret;
};

const displayIntervals = (intervals) => {
  for (const [start, end] of intervals) {
    console.log(`\t\t[${start}, ${end}]`);
  }
  console.log('----------');
};

console.log(insert([[1, 2], [4, 6]], [0, 7]));
