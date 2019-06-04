/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  if (nums.length === 0) {
    return false;
  } else if (nums.length === 1) {
    return nums[0] === target ? true : false;
  }
  while (left <= right) {
    // console.log(`left = ${left}, right = ${right}`);
    const mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) {
      return true;
    }

    if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
      left ++;
      right --;
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
  return false;
};


// console.log(search([2, 5, 6, 0, 0, 1, 2], 3));
// console.log(search([], 3));
// console.log(search([2], 3));
// console.log(search([3, 4], 4));
console.log(search([1, 3, 1, 1, 1], 3));
