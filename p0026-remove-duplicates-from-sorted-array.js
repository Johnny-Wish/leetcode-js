/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i ++) {
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i ++;
    }
    nums[j] = nums[i];
    j ++;
  }
  return j;
};


const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const length = removeDuplicates(nums);
console.log(nums.slice(0, length));
