/**
 * TreeNode
 *
 * @param {number} val
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function(root) {
  if (root === null) return [];
  const ret = [];

  /**
   * @param {TreeNode} node
   */
  function traverse(node) {
    if (node === null) return;
    traverse(node.left);
    ret.push(node.val);
    traverse(node.right);
  }

  traverse(root);
  return ret;
};
