/**
 * @param {number} val
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}


/**
 * @param {number[]} vals
 * @return {ListNode}
 */
const getListNode = (vals) => {
  const sentinel = new ListNode(0);
  let node = sentinel;
  for (const val of vals) {
    node.next = new ListNode(val);
    node = node.next;
  }
  return sentinel.next;
};

/**
 * @param {number[]} node
 * @return {ListNode}
 */
const convertNode = (node) => {
  const vals = [];
  while (node !== null) {
    vals.push(node.val);
    node = node.next;
  }
  return vals;
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
  let currentIndex = 0;
  let preSuspect = new ListNode(-0.1);
  preSuspect.next = head;
  let suspectFound = false;
  for (let node = head; node !== null; node = node.next, currentIndex ++) {
    if (currentIndex >= n) {
      preSuspect = preSuspect.next;
      suspectFound = true;
    }
    console.log(preSuspect.val, node.val);
  }
  if (suspectFound) {
    console.log('suspect found');
    preSuspect.next = preSuspect.next.next;
    return head;
  } else {
    console.log('suspect not found');
    return head.next;
  }
};

// console.log(convertNode(getListNode([1, 2, 3, 4, 5])));
// const removed = removeNthFromEnd(getListNode([1, 2, 3, 4, 5]), 0);
const removed = removeNthFromEnd(getListNode([1, 2]), 1);
console.log(convertNode(removed));
console.log(removed);

