/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let c = '';
  let carry = false;
  while (i >= 0 || j >= 0) {
    const x = (i < 0 || a[i] === '0') ? 0 : 1;
    const y = (j < 0 || b[j] === '0') ? 0 : 1;
    const z = x + y + (carry ? 1 : 0);
    carry = (z >= 2);
    c = (z % 2 === 1 ? '1' : '0') + c;
    i --;
    j --;
  }
  if (carry) {
    c = '1' + c;
  }
  return c;
};


console.log('c =', addBinary('11', '10'));
console.log('c =', addBinary('1', '10'));
console.log('c =', addBinary('11', '11'));
console.log('c =', addBinary('11', '1'));
console.log('c =', addBinary('1010', '1011'));
