/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  const permutations = [];
  const used = new Array(nums.length).fill(false);

  function dfs(perm) {
    if (perm.length === nums.length) {
      permutations.push(perm);
    }
    for (let i = 0; i < nums.length; i ++) {
      if (used[i]) continue;

      used[i] = true;
      dfs([...perm, nums[i]]);
      used[i] = false;
    }
  }

  dfs([]);
  return permutations;
};

console.log(permute(['a', 'b', 'c', 'd']));
