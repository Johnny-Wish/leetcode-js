/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function(heights) {
  if (heights.length === 0) return 0;
  if (heights.length === 1) return Math.max(heights[0], 0);
  let maxArea = 0;
  const stack = [];

  for (let i = 0; i <= heights.length; i ++) {
    const h = (i === heights.length ? 0 : heights[i]);
    if (stack.length === 0 || h >= heights[peek(stack)]) {
      stack.push(i);
      continue;
    }
    const topIndex = stack.pop();
    const width = stack.length === 0 ? i : i - 1 - peek(stack);
    maxArea = Math.max(maxArea, heights[topIndex] * width);
    i --;
  }
  return maxArea;
};

const peek = (arr) => arr[arr.length - 1];

console.log(largestRectangleArea([2, 1, 5, 6, 6, 7]));
