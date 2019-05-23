/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {
  nums.sort((a, b) => (a - b));
  console.log(`after sorting nums=[${nums}]\n`);
  let closestSum = Infinity;
  let closestDelta = Infinity;

  const update = (delta, sum) => {
    if (delta < closestDelta) {
      console.log(`updated new delta = ${delta}, sum = ${sum}`);
      closestDelta = delta;
      closestSum = sum;
    } else {
      console.log(`not updating ${delta} >= ${closestDelta}, this sum being ${closestSum}`);
    }
  };

  for (let i = 0; i < nums.length; i ++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    j = i + 1;
    k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      console.log(`checking ${nums[i]} ${nums[j]} ${nums[k]}`);
      const delta = sum - target;
      if (delta < 0) {
        update(-delta, sum);
        do {
          j ++;
          console.log(`j moving to ${nums[j]}\n`);
        } while (nums[j] === nums[j - 1] && j < k);
      } else if (delta > 0) {
        update(delta, sum);
        do {
          k --;
          console.log(`k moving to ${nums[k]}\n`);
        } while (nums[k] === nums[k + 1] && j < k);
      } else {
        console.log(`perfect match found\n`);
        return target;
      }
    }
  }

  return closestSum;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([-1, 0, 1, 2, -1, -4], 0));
console.log(threeSumClosest([0, 2, 1, -3], 1));
