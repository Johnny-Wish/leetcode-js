/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
  const ret = [];
  function dfs(current, k) {
    if (k >= nums.length) {
      ret.push(current);
      return;
    }
    dfs([...current], k + 1);
    dfs([...current, nums[k]], k + 1);
  }

  dfs([], 0);
  return ret;
};


// console.log(subsets([1, 2, 3, 4, 5]));
console.log(subsets([1]));
