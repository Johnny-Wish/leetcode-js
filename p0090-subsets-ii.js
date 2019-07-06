/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b);

  const results = [];

  function dfs(i, subset, lastUsed) {
    if (i === nums.length) {
      results.push(subset);
      return;
    }

    dfs(i + 1, [...subset], false);
    if (lastUsed || nums[i] !== nums[i - 1]) {
      dfs(i + 1, [...subset, nums[i]], true);
    }
  }

  dfs(0, [], true);
  return results;
};

// console.log(subsetsWithDup([1, 1, 2, 2]));
