/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function(nums, target) {
  if (nums.length < 4) {
    return [];
  }

  nums.sort((x, y) =>(x - y));
  if (nums[0] === nums[nums.length - 1]) {
    if (nums[0] * 4 === target) {
      return [[nums[0], nums[0], nums[0], nums[0]]];
    } else {
      return [];
    }
  }

  const quadruplets = [];

  for (let a = 0; a < nums.length; a ++) {
    if (a > 0 && nums[a] === nums[a - 1]) continue;
    for (let b = a + 1; b < nums.length; b ++) {
      if (b > a + 1 && nums[b] === nums[b - 1]) continue;
      let c = b + 1;
      let d = nums.length - 1;
      while (c < d) {
        const sum = nums[a] + nums[b] + nums[c] + nums[d];
        if (sum < target) {
          do { c ++; } while (nums[c] === nums[c - 1] && c < d);
        } else if (sum > target) {
          do { d --; } while (nums[d] === nums[d + 1] && c < d);
        } else {
          quadruplets.push([nums[a], nums[b], nums[c], nums[d]]);
          do { c ++; } while (nums[c] === nums[c - 1] && c < d);
          do { d --; } while (nums[d] === nums[d + 1] && c < d);
        }
      }
    }
  }

  return quadruplets;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([0, 0, 0, 0], 0))
