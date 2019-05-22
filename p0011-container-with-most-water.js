/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  const computeArea = (l, r) => (r - l) * Math.min(height[l], height[r]);
  let left = 0;
  let right = height.length - 1;
  let ret = computeArea(left, right);

  while (left < right) {
    if (height[left] < height[right]) {
      left ++;
    } else {
      right --;
    }
    ret = Math.max(ret, computeArea(left, right));
  }
  return ret;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
