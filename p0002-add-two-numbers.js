/**
 * @param {number} val
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  if (l1 === null) {
    l1 = new ListNode(0);
  }
  if (l2 === null) {
    l2 = new ListNode(0);
  }
  let carry = 0;
  const sentinel = new ListNode(0);
  let node = sentinel;

  while (l1 !== null || l2 !== null) {
    let v1;
    let v2;
    if (l1 === null) {
      v1 = 0;
    } else {
      v1 = l1.val;
      l1 = l1.next;
    }

    if (l2 === null) {
      v2 = 0;
    } else {
      v2 = l2.val;
      l2 = l2.next;
    }

    let sum = v1 + v2 + carry;
    if (sum >= 10) {
      sum = sum - 10;
      carry = 1;
    } else {
      carry = 0;
    }

    node.next = new ListNode(sum);
    node = node.next;
  }
  if (carry > 0) {
    node.next = new ListNode(carry);
  }

  return sentinel.next;
};

/**
 * @param {Array} arr
 * @return {ListNode}
 */
function getListNode(arr) {
  const sentinel = new ListNode(0);
  let node = sentinel;

  for (const v of arr) {
    node.next = new ListNode(v);
    node = node.next;
  }

  return sentinel.next;
}

const a = getListNode([2, 4, 3]);
const b = getListNode([1, 8]);
console.log(addTwoNumbers(a, b));

