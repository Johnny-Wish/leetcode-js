/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isCompleteTree = function(root) {
  const queue = [];
  if (root === null) return true;

  queue.push(root);
  let end = false;
  while (queue.length > 0) {
    head = queue.shift();
    if (head.left === null) {
      end = true;
    } else {
      if (end) return false;
      queue.push(head.left);
    }
    
    if (head.right === null) {
      end = true;
    } else {
      if (end) return false;
      queue.push(head.right);
    }
  }

  return true;
};
