/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const map = new Map();

  for (let i=0; i < nums.length; i++) {
    const j = map.get(target - nums[i]);
    // console.log(`i=${i}, this=${nums[i]}, that=${target-nums[i]}, j=${j}`);
    if (j === undefined) {
      map.set(nums[i], i);
    } else {
      return [j, i];
    }
  }

  console.log(map);
};


const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));
