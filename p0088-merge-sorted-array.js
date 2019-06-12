/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  let k = m + n - 1;
  if (n === 0) return;
  let i = m - 1;
  let j = n - 1;

  while (k >= 0) {
    // console.log(`${nums1[i]} v.s. ${nums2[j]}`);
    if (nums1[i] > nums2[j]) {
      nums1[k --] = nums1[i --];
    } else {
      nums1[k --] = nums2[j --];
    }
    if (i < 0 || j < 0) break;
  }
  while (j >= 0) {
    nums1[k --] = nums2[j --];
  }
};

// const nums1 = [1, 3, 5, 0, 0, 0, 0, 0];
// const m = 3;
// const nums2 = [-1, 0, 2, 4, 6];
// const n = 5;
const nums1 = [1];
const m = 1;
const nums2 = [];
const n = 0;
// const nums1 = [];
// const m = 0;
// const nums2 = [1];
// const n = 1;
merge(nums1, m, nums2, n);
console.log(nums1);
