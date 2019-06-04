/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
  const count = new Array(3).fill(0);

  for (const n of nums) {
    count[n] ++;
  }

  for (let i = 0; i < nums.length; i ++) {
    if (i < count[0]) {
      nums[i] = 0;
    } else if (i < count[0] + count[1]) {
      nums[i] = 1;
    } else {
      nums[i] = 2;
    }
  }
};


l = [2, 0, 2, 1, 1, 0];
sortColors(l);
console.log(l);
