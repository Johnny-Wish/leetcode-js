/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  let len = 0;
  for (let i = 0; i < nums.length; i ++) {
    while (i < nums.length && nums[i] === val) {
      i ++;
    }
    if (i === nums.length) {
      break;
    }
    nums[len] = nums[i];
    len ++;
  }
  return len;
};


const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;
const length = removeElement(nums, val);
console.log(length, nums.slice(0, length));
