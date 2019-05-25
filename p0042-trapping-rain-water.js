/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
  if (height.length <= 2) {
    return 0;
  }
  let leftMax = height[0];
  let rightMax = height[height.length - 1];
  let water = 0;

  for (let i = 0, j = height.length - 1; i <= j; ) {
    // console.log(`[(${i})->${leftMax} (${j})->${rightMax}]`)
    if (leftMax < rightMax) {
      const left = height[i];
      if (left < leftMax) {
        water += (leftMax - left);
      } else {
        leftMax = left;
      }
      i ++;
    } else {
      const right = height[j];
      if (right < rightMax) {
        water += (rightMax - right);
      } else {
        rightMax = right;
      }
      j --;
    }
  }
  
  return water;
};

/**
 * @param {number[]} height
 * @return {number}
 */
const trap2 = function(height) {
  if (height.length <= 2) {
    return 0;
  }
  const left = [];
  const right = [];

  for (let i = 0; i < height.length; i ++) {
    const prev = left.length > 0 ? left[left.length - 1] : 0;
    left.push(Math.max(prev, height[i]));
  }

  for (let j = height.length - 1; j >= 0; j --) {
    const prev = right.length > 0 ? right[0] : 0;
    right.unshift(Math.max(prev, height[j]));
  }

  let trapped = 0;
  for (let i = 0; i < height.length; i ++) {
    trapped += Math.max(0, Math.min(left[i], right[i]) - height[i]);
  }
  return trapped;
};


console.log(trap([]));
console.log(trap([2]));
console.log(trap([1, 2]));
console.log(trap([100, 0, 100]));
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 3, 4]));
