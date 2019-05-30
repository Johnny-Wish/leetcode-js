/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  intervals.sort((it1, it2) => (it1[0] - it2[0]));
  // console.log(`sorted intervals: ${intervals}`);
  let current = [intervals[0][0], intervals[0][0]];
  const merged = [];
  for (const interval of intervals) {
    if (current[1] < interval[0]) {
      merged.push(current);
      current = interval;
    } else {
      current[1] = Math.max(interval[1], current[1]);
    }
  }
  merged.push(current);
  return merged;
};


console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.log(merge([[2, 6], [1, 3], [15, 18], [8, 10]]));
console.log(merge([[15, 18], [8, 10], [2, 6], [1, 3]]));
console.log(merge([[15, 18], [2, 6], [8, 10], [1, 3]]));
console.log(merge([[1, 4], [3, 7], [4, 5]]));
console.log(merge([[1, 4], [4, 5]]));
console.log(merge([[3, 7], [4, 5]]));
