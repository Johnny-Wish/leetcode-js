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
const rotateRight = function(head, k) {
  if (head === null || head.next === null) {
    return head;
  }
  let node = head;
  let len = 1;
  while (node.next !== null) {
    // console.log(`node is at ${convertList(node)}`);
    node = node.next;
    len ++;
  }
  // console.log(`len = ${len}`);
  k %= len;
  const p = len - k;
  let preHead = node;
  preHead.next = head;
  for (let i = 0; i < p; i ++) {
    head = head.next;
    preHead = preHead.next;
  }
  preHead.next = null;
  return head;
};

list = getList([1, 2, 3, 4, 5]);
vals = convertList(list);
console.log(vals);

console.log(convertList(rotateRight(getList([1, 2, 3, 4, 5]), 2)));
console.log(convertList(rotateRight(getList([0, 1, 2]), 4)));
console.log(convertList(rotateRight(getList([0]), 4)));
console.log(convertList(rotateRight(getList([]), 4)));
