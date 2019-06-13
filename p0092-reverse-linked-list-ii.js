/**
 * Definition for singly-linked list.
 * @param {number} val
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const getList = (vals) => {
  const sentinel = new ListNode(null);
  let node = sentinel;
  for (const val of vals) {
    node.next = new ListNode(val);
    node = node.next;
  }
  return sentinel.next;
};

const convertList = (node) => {
  const vals = [];
  while (node !== null) {
    vals.push(node.val);
    node = node.next;
  }
  return vals;
};

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = function(head, m, n) {
  if (m === n) return head;
  const sentinel = new ListNode(null);
  sentinel.next = head;
  let node = sentinel;
  let preNode;
  let count = 0;
  let zeroest;
  while (sentinel !== null) {
    if (count > n) break;
    if (count <= m) {
      if (count === m - 1) zeroest = node;
      if (count === m) preNode = node;

      count++;
      node = node.next;
      continue;
    }

    preNode.next = node.next;
    node.next = zeroest.next;
    zeroest.next = node;
    node = preNode.next;
    count++;
  }

  return sentinel.next;
};

const node = getList([1, 2, 3, 4, 5]);
const reversed = reverseBetween(node, 3, 5);
console.log(convertList(reversed));
