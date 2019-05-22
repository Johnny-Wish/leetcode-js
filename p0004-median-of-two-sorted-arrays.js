/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const computeI = (l, r) => Math.floor((l + r) / 2);
  const computeJ = (i) => Math.floor((nums1.length + nums2.length) / 2) - i;
  const computeSentinels = (i, arr) => {
    const x0 = arr[i-1] === undefined ? -Infinity : arr[i-1];
    const x1 = arr[i] === undefined ? Infinity : arr[i];
    console.log(`\t\tsentinels = ${x0}, ${x1}`);
    return [x0, x1];
  };

  let l = 0;
  let r = nums1.length;
  let i = computeI(l, r);
  let j = computeJ(i);

  while (l < r) {
    console.log(`l=${l}, r=${r}`);
    i = computeI(l, r);
    j = computeJ(i);
    const [a0, a1] = computeSentinels(i, nums1);
    const [b0, b1] = computeSentinels(j, nums2);
    console.log(`${i}: ${[a0, a1]}\t${j}: ${[b0, b1]}`);
    if (a0 > b1) {
      console.log(`updating r from ${r} to ${i}`);
      r = i;
    } else if (b0 > a1) {
      console.log(`updating l from ${l} to ${i+1}`);
      l = i + 1;
    } else {
      console.log('finished execution');
      break;
    }
  }
  i = computeI(l, r);
  j = computeJ(i);
  console.log(`l=${l}, r=${r}`);
  console.log(`i=${i}, j=${j}`);

  const [a0, a1] = computeSentinels(i, nums1);
  const [b0, b1] = computeSentinels(j, nums2);
  const c0 = Math.max(a0, b0);
  const c1 = Math.min(a1, b1);
  if ((nums1.length + nums2.length) % 2 == 0) {
    return (c0 + c1) / 2;
  } else {
    return c1;
  }
};

const nums1 = [11, 22, 33];
const nums2 = [10, 20, 30, 40, 50];
const result = findMedianSortedArrays(nums1, nums2);
console.log(`result = ${result}`);
