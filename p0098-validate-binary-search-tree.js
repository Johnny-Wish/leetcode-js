/**
 * Definition for a binary tree node.
 * @param {number} val
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function(root) {
  return dfs(root, -Infinity, Infinity);
};

/**
 * @param {TreeNode} root
 * @param {number} lower
 * @param {number} upper
 * @return {boolean}
 */
function dfs(root, lower, upper) {
  if (root === null) return true;
  if (root.val <= lower || root.val >= upper) return false;
  if (root.left !== null && root.left.val >= root.val) return false;
  if (root.right !== null && root.right.val <= root.val) return false;
  return dfs(root.left, lower, root.val) && dfs(root.right, root.val, upper);
}
