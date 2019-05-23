function ListNode(val) {
  this.val = val;
  this.next = null;
}

const getList = (vals) => {
  const sentinel = new ListNode();
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
  const sentinel = new ListNode(null);
  let tail = sentinel;
  while (true) {
    let allEmpty = true;
    let smallest = Infinity;
    let nodeIndex = null;
    for (let i = 0; i < lists.length; i ++) {
      if (lists[i] !== null) {
        allEmpty = false;
        if (smallest > lists[i].val) {
          smallest = lists[i].val;
          nodeIndex = i;
        }
      }
    }

    if (allEmpty) {
      break;
    }
    // console.log(`selected index = ${nodeIndex}, remaining = ${convertList(lists[nodeIndex])}`);

    tail.next = lists[nodeIndex];
    tail = tail.next;
    lists[nodeIndex] = tail.next;
    // console.log(`\tsentinel is now ${convertList(sentinel)}`)
  }

  return sentinel.next;
};

l1 = getList([10, 20, 30, 40, 50]);
l2 = getList([11, 21, 31, 41, 51]);
l3 = getList([110, 210, 310, 410, 510]);
// l1 = getList([]);
// l2 = getList([]);
// l3 = getList([]);
lists = [l1, l2, l3];
merged = mergeKLists(lists);
merged = convertList(merged);
console.log(merged);
