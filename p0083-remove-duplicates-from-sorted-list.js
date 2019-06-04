/**
 * constructor of ListNode
 *
 * @param {number} val val
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
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
  const sentinel = new ListNode(null);
  sentinel.next = head;
  let node = sentinel;
  while (node !== null) {
    const value = node.val;
    const tail = node;
    while (node !== null && node.val === value) {
      node = node.next;
    }
    tail.next = node;
  }
  return sentinel.next;
};

l = getList([0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 4, 5, 6, 6]);
l = deleteDuplicates(l);
console.log(convertList(l));
