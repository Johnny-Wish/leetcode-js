/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
  if (nums.length <= 1) return true;

  const accessible = new Array(nums.length).fill(false);
  accessible[0] = true;

  for (let i = 0; i < nums.length; i ++) {
    if (!accessible[i]) break;
    for (let j = 1; j <= nums[i]; j ++) {
      // console.log(`i = ${i}, j = ${j}`);
      const k = i + j;
      accessible[k] = true;
      if (k === nums.length - 1) {
        return accessible.pop();
      }
    }
  }
  return accessible.pop();
};

console.log(canJump([]));
console.log(canJump([0]));
console.log(canJump([1, 1, 3, 1, 4]));
console.log(canJump([1, 2, 3, 1, 0, 4]));
console.log(canJump([1, 1, 1, 1, 1]));
console.log(canJump([1, 1, 1, 1, 1, 0, 0]));
console.log(canJump([0, 1, 1, 1, 1, 1, 0]));
console.log(canJump([1, 1, 1, 1, 1, 1, 0]));
