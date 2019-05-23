/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  // why do I sense sexual innuendo in this function's name

  if (nums.length < 3) {
    return [];
  }

  nums.sort((a, b) => (a - b));
  // console.log(`after sorting, nums = [${nums}]`);

  if (nums[0] === 0 && nums[nums.length - 1] === 0) {
    return [[0, 0, 0]];
  } else if (nums[0] > 0 || nums[nums.length - 1] < 0) {
    return [];
  }

  triplets = [];

  for (let i = 0; i < nums.length; i ++ ) {
    if (i !== 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      // console.log(`checking ${nums[i]} ${nums[j]} ${nums[k]}`);
      if (sum < 0) {
        do j ++; while (nums[j] === nums[j - 1] && j < k);
      } else if (sum > 0) {
        do k --; while (nums[k] === nums[k + 1] && j < k);
      } else {
        triplets.push([nums[i], nums[j], nums[k]]);
        do j ++; while (nums[j] === nums[j - 1] && j < k);
        do k --; while (nums[k] === nums[k + 1] && j < k);
      }
    }
  }

  return triplets;

};

let nums;
nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
nums = [];
console.log(threeSum(nums));
nums = [0];
console.log(threeSum(nums));
nums = [0, 0, 0];
console.log(threeSum(nums));
nums = [0, 0, 0, 0, 0, 0, 0];
console.log(threeSum(nums));
nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
nums = [-2, 0, 0, 0, 2, 2, 2]
console.log(threeSum(nums));
