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
 * @return {ListNode}
 */
const swapPairs = function(head) {
  if (head === null) {
    return null;
  }
  const sentinel = new ListNode(null);
  sentinel.next = head;

  let pre = sentinel;
  let first = head;
  let second = head.next;

  while (first !== null && second !== null) {
    // pre -> first -> second -> second.next
    // pre -> second -> first -> second.next

    [pre.next, first.next, second.next] = [second, second.next, first];
    if (first.next === null) {
      break;
    }
    [pre, first, second] = [first, first.next, first.next.next];
  }
  return sentinel.next;
};


const node = getList([1, 2, 3]);
const swapped = swapPairs(node);
console.log(convertList(swapped));

