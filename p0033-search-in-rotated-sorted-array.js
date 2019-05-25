/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  if (nums.length === 0) {
    return -1;
  } else if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }
  while (left <= right) {
    // console.log(`left = ${left}, right = ${right}`);
    const mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) {
      return mid;
    }

    if (nums[left] <= nums[right]) {
      // normal binary search
      if (target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[left] <= nums[mid]) {
      // left < mid <= pivot < right
      if (nums[mid] < target) {  // target in (mid, pivot]
        left = mid + 1;
      } else if (nums[left] <= target) { // target in [left, mid)
        right = mid - 1;
      } else { // target in [pivot, right]
        left = mid + 1;
      }
    } else {
      // left < pivot <= mid < right
      if (target < nums[mid]) { // target in [pivot, mid)
        right = mid - 1;
      } else if (target <= nums[right]) { // target in (mid, right]
        left = mid + 1;
      } else {  // target in [left, pivot]
        right = mid - 1;
      }
    }
  }
  return -1;
};

console.log(search([3, 1], 0));
console.log(search([3, 1], 1));
console.log(search([3, 1], 2));
console.log(search([3, 1], 3));
console.log(search([3, 1], 4));
for (let i = -1; i < 9; i ++) {
  console.log(`index of ${i} is`, search([4, 5, 6, 7, 0, 1, 2], i));
}

