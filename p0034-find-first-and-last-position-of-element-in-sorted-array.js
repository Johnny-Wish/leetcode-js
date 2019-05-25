/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {
  if (nums.length === 0 || target < nums[0] || nums[nums.length - 1] < target) {
    return [-1, -1];
  }
  let first;
  let last;

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    console.log(`looking for the first one in [${left}, ${right}]`);
    if (left === right) {
      first = target === nums[left] ? left : -1;
      break;
    }
    const mid = Math.floor((left + right) / 2);
    if (target <= nums[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  if (first === -1) { // if there isn't a match, no need to do the next search
    return [-1, -1];
  }

  left = first; // left cannot be less than first occurence
  right = nums.length - 1;
  while (left <= right) {
    console.log(`looking for the last one in [${left}, ${right}]`);
    if (left === right) {
      last = target === nums[right] ? right : -1;
      break;
    }
    const mid = Math.ceil((left + right) / 2);
    if (nums[mid] <= target) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return [first, last];
};

console.log(searchRange([], 1));
console.log(searchRange([1], 1));
console.log(searchRange([3, 3, 3, 3, 3, 3, 3, 3], 3));
console.log(searchRange([2, 2, 3, 3, 3, 4, 4, 4], 4));
console.log(searchRange([2, 2, 3, 3, 3, 4, 4, 4], 3.5));
