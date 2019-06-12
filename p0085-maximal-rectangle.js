const peek = (arr) => arr[arr.length - 1];

/**
 * @param {string[]} matrix
 * @return {number}
 */
const maximalRectangle = function(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return 0;
  const n = matrix[0].length;
  let maxArea = 0;
  const histogram = new Array(n).fill(0);
  for (const row of matrix) {
    for (let j = 0; j < n; j++) {
      if (row[j] === '0') {
        histogram[j] = 0;
      } else {
        histogram[j]++;
      }
    }
    maxArea = Math.max(maxArea, largestRectangleArea(histogram));
  }

  return maxArea;
};

/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function(heights) {
  if (heights.length === 0) return 0;
  if (heights.length === 1) return Math.max(heights[0], 0);
  let maxArea = 0;
  const stack = [];

  for (let i = 0; i <= heights.length; i++) {
    const h = i === heights.length ? 0 : heights[i];
    if (stack.length === 0 || h >= heights[peek(stack)]) {
      stack.push(i);
      continue;
    }
    const topIndex = stack.pop();
    const width = stack.length === 0 ? i : i - 1 - peek(stack);
    maxArea = Math.max(maxArea, heights[topIndex] * width);
    i--;
  }
  return maxArea;
};

matrix = [
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
];
console.log(maximalRectangle(matrix));
