/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  if (nums.length <= 2) {
    return nums.length;
  }

  let tail = 1;
  let last = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i ++) {
    if (last === nums[i]) {
      if (count <= 1) {
        nums[tail] = nums[i];
        tail ++;
      }
      count ++;
    } else {
      last = nums[i];
      count = 1;
      nums[tail] = nums[i];
      tail ++;
    }
  }

  return tail;
};


// l = [1, 1, 1, 2, 2, 3];
l = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(l));
console.log(l);
