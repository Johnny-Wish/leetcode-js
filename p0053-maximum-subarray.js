/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  let max = Math.max(...nums);
  if (max < 0) return max;

  let current = 0;
  nums.unshift(0);

  for (const num of nums) {
    current += num;
    if (num > 0) {
      max = Math.max(max, current);
    }
    if (current < 0) {
      current = 0;
    }
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([]));
console.log(maxSubArray([-1]));
