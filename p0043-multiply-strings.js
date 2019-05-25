/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function(num1, num2) {
  const getDigit = (num, k) => num[num.length - 1 - k] - '0';
  const product = new Array(num1.length + num2.length);
  product.fill(0);
  let ret = '';

  for (let i = 0; i < num1.length; i ++) {
    const digit1 = getDigit(num1, i);
    for (let j = 0; j < num2.length; j ++) {
      const digit2 = getDigit(num2, j);
      product[i + j] += digit1 * digit2;
      // console.log(`${digit1} x ${digit2} + ... = ${product} at (${i+j})`);
    }
  }

  for (let k = 0; k < num1.length + num2.length - 1; k ++) {
    const current = product[k];
    product[k+1] += Math.floor(current / 10);
    product[k] %= 10;
    // console.log(product);
    ret = product[k] + ret;
  }

  ret = product.pop() + ret;
  let firstNonZero = 0;
  while (ret[firstNonZero] === '0') {
    firstNonZero ++;
  }
  ret = ret.substring(firstNonZero);
  return ret === '' ? '0': ret;
};

console.log(multiply('1234', '456'));
console.log(multiply('1', '1'));
console.log(multiply('2', '2'));
console.log(multiply('999', '999'));
console.log(multiply('000', '999'));
