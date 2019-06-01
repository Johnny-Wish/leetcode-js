/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  if (x === 0) {
    return 0;
  }
  if (x === 1) {
    return 1;
  }

  let left = 1;
  let right = x;
  while (left <= right) {
    // console.log(`left = ${left}`);
    // console.log(`right = ${right}`);
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;
    if (square === x) {
      return mid;
    }
    if (square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left - 1;
};


for (let i = 0; i < 20; i ++) {
  console.log(`${i}: ${mySqrt(i)}`);
}

// console.log(mySqrt(2));
