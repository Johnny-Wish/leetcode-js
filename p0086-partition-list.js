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
 * @param {number} x
 * @return {ListNode}
 */
const partition = function(head, x) {
  const sentinel1 = new ListNode(null);
  const sentinel2 = new ListNode(null);
  let node1 = sentinel1;
  let node2 = sentinel2;
  while (head !== null) {
    if (head.val < x) {
      node1.next = head;
      head = head.next;
      node1 = node1.next;
      node1.next = null;
    } else {
      node2.next = head;
      head = head.next;
      node2 = node2.next;
      node2.next = null;
    }
  }

  node1.next = sentinel2.next;
  return sentinel1.next;
};

// const node = getList([5, 4, 3, 2, 1, 0]);
const node = getList([1]);
const newNode = partition(node, 6);
console.log(convertList(newNode));
