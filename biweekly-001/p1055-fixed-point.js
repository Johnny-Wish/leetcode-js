/**
 * @param {number[]} A
 * @return {number}
 */
const fixedPoint = function(A) {
  if (A.length === 0) {
    return -1;
  }

  let left = 0;
  let right = A.length - 1;
  let mid;

  while (left <= right) {
    if (left === right) {
      return (A[left] === left) ? left : -1;
    }
    mid = Math.floor((left + right) / 2);
    // console.log(`left=${left}, right=${right}, mid=${mid}`)
    const val = A[mid] - mid;
    if (val < 0) {
      left = mid + 1;
    } else if (val > 0) {
      right = mid - 1;
    } else {
      right = mid;
    }
  }
  if (A[mid] === mid) {
    return mid;
  } else {
    return -1;
  }
};


console.log(fixedPoint([]));
console.log(fixedPoint([0]));
console.log(fixedPoint([0, 1]));
console.log(fixedPoint([1]));
console.log(fixedPoint([-1, 0, 1, 2, 3, 4]));
console.log(fixedPoint([0, 1, 2, 3, 4]));
console.log(fixedPoint([-10, -5, 0, 3, 7]));
console.log(fixedPoint([-10, -5, 2, 3, 7]));
console.log(fixedPoint([0, 2, 5, 8, 17]));
console.log(fixedPoint([-10, -5, 3, 4, 7, 9]));
