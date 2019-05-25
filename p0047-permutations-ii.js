/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function(nums) {
  nums.sort((a, b) => (a - b));
  // console.log(`after sorting, nums = ${nums}`);
  const used = new Array(nums.length).fill(false);
  const permutations = [];

  function dfs(perm) {
    // console.log(`current permutation = ${perm}`);
    if (perm.length === nums.length) {
      permutations.push(perm);
      // console.log(`pushed`);
      return;
    }

    let lastUsed = null;
    for (let i = 0; i < nums.length; i ++) {
      if (used[i]) continue;
      if (lastUsed === nums[i]) continue;
      lastUsed = nums[i];
      used[i] = true;
      dfs([...perm, nums[i]]);
      used[i] = false;
    }
  }

  dfs([]);
  return permutations;
};

console.log(permuteUnique([1, 2, 3, 3]));
console.log(permuteUnique([10, -2, 3, 3]));
console.log(permuteUnique([]));
console.log(permuteUnique([1]));
