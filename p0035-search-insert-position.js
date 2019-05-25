/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  if (nums.length === 0) {
    return 0;
  } else if (nums[nums.length - 1] < target) {
    return nums.length;
  } else if (target < nums[0]) {
    return 0;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (left === right) {
      return left
    }
    const mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) {
      return mid;
    }

    if (target < nums[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
};

for (let i = 0; i < 8; i ++) {
  console.log(searchInsert([0, 1, 2, 3, 4, 5, 6, 7], i));
  console.log(searchInsert([0, 1, 2, 3, 4, 5, 6, 7], i + 0.5));
}
