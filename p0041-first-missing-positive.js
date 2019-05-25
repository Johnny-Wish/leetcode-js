const filterPositive = (nums) => {
  if (nums.length === 0) {
    return;
  }

  let i = 0;
  let j = 0;
  while (i < nums.length) {
    while (nums[i] <= 0 && i < nums.length) {
      i ++;
    }
    if (i === nums.length) {
      break;
    }
    nums[j] = nums[i];
    i ++;
    j ++;
  }
  nums.length = j;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function(nums) {
  // remove negative elements
  filterPositive(nums);
  // nums = nums.filter(n => n > 0); // this takes O(n) space

  // prepend 0 to the front the array
  nums.unshift(0);

  // flip elements whose index appear in the array
  for (let i = 1; i < nums.length; i ++) {
    const val = Math.abs(nums[i]);
    if (val < nums.length && nums[val] > 0) {
      nums[val] = -nums[val];
    }
  }

  // find the first unflipped element and return its index
  for (let i = 1; i < nums.length; i ++) {
    if (nums[i] > 0) {
      return i;
    }
  }
  return nums.length;
};


console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([3, 4, 2, 1]));
console.log(firstMissingPositive([3, 4, -3, 5, 8, 1, 2, 0]));
