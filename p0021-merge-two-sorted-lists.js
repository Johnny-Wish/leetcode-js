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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
  const sentinel = new ListNode(null);
  let node = sentinel;

  while (l1 !== null || l2 !== null) {
    if (l1 === null) {
      // console.log(`l1 is null`);
      node.next = l2;
      break;
    }
    if (l2 === null) {
      // console.log(`l2 is null`);
      node.next = l1;
      break;
    }
    if (l1.val < l2.val) {
      // console.log('using l1');
      node.next = l1;
      node = node.next;
      l1 = l1.next;
    } else {
      // console.log('using l2');
      node.next = l2;
      node = node.next;
      l2 = l2.next;
    }
    // console.log(`\tl1 retains ${convertList(l1)}`);
    // console.log(`\tl2 retains ${convertList(l2)}`);
    // console.log(`\tsentinel is now ${convertList(sentinel)}`);
  }
  return sentinel.next;
};


l1 = getList([1, 2, 3, 4]);
l2 = getList([2, 4, 3, 5]);
l3 = mergeTwoLists(l1, l2);

vals = convertList(l3);
console.log(vals);
