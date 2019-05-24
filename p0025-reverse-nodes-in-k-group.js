/**
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
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function(head, k) {
  if (head === null || k === 1) {
    return head;
  }
  const reverse = (prevTail) => {
    let scout = prevTail;
    for (let i = 0; i < k; i ++) {
      scout = scout.next;
      if (scout === null) {
        return prevTail.next;
      }
    }
    const nextHead = scout.next;
    const pred = prevTail.next;
    let curr = prevTail.next.next;

    while (curr !== nextHead) {
      const succ = curr.next;
      curr.next = prevTail.next;
      prevTail.next = curr;
      pred.next = succ;
      curr = succ;
    }
    return pred;
  };

  // some people name this 'dummyHead' while I prefer `sentinel`
  const sentinel = new ListNode(null);
  sentinel.next = head;
  let prevTail = sentinel;
  while (prevTail !== null) {
    prevTail = reverse(prevTail);
  }

  return sentinel.next;
};

const node = getList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
const swapped = reverseKGroup(node, 1);
console.log(convertList(swapped));

