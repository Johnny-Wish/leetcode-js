/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function(nums) {
  if (nums.length <= 1) return 0;

  const dist = new Array(nums.length).fill(Infinity);
  dist[0] = 0;

  for (let i = 0; i < nums.length; i ++) {
    for (let j = 1; j <= nums[i]; j ++) {
      const k = i + j;
      dist[k] = Math.min(dist[k], dist[i] + 1);
      if (k === nums.length - 1) {
        // console.log(dist);
        return dist[k];
      }
    }
  }
  // console.log(dist);
  return dist[dist.length - 1];
};

console.log(jump([1, 1, 3, 1, 4]));
console.log(jump([1, 2, 3, 1, 0, 4]));
console.log(jump([1, 1, 1, 1, 1]));
console.log(jump([1, 1, 1, 1, 1, 0, 0]));
console.log(jump([0, 1, 1, 1, 1, 1, 0]));
console.log(jump([1, 1, 1, 1, 1, 1, 0]));
