/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function(nums) {
  if (nums.length <= 1) {
    return;
  }

  const reverse = (l, r) => {
    while (l <= r) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l ++;
      r --;
    }
  };

  let i = nums.length - 1;
  for (; i > 0; i --) {
    if (nums[i - 1] < nums[i]) {
      break;
    }
  }
  if (i === 0) {
    reverse(0, nums.length - 1);
    return;
  }

  let closestIndex = i;
  while (closestIndex < nums.length) {
    if (nums[closestIndex] <= nums[i - 1]) {
      break;
    }
    closestIndex ++;
  }
  closestIndex --;
  [nums[i - 1], nums[closestIndex]] = [nums[closestIndex], nums[i - 1]];
  reverse(i, nums.length - 1);
};


numbers = [1, 2, 3];
nextPermutation(numbers);
console.log(numbers);
nextPermutation(numbers);
console.log(numbers);
nextPermutation(numbers);
console.log(numbers);
nextPermutation(numbers);
console.log(numbers);
nextPermutation(numbers);
console.log(numbers);
nextPermutation(numbers);
console.log(numbers);

numbers = [1, 1, 5];
nextPermutation(numbers);
console.log(numbers);
nextPermutation(numbers);
console.log(numbers);
nextPermutation(numbers);
console.log(numbers);
nextPermutation(numbers);
console.log(numbers);
