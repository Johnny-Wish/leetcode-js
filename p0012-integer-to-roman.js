/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
  unitMap = new Map();
  unitMap.set(1, 'I');
  unitMap.set(5, 'V');
  unitMap.set(10, 'X');
  unitMap.set(50, 'L');
  unitMap.set(100, 'C');
  unitMap.set(500, 'D');
  unitMap.set(1000, 'M');
  unitMap.set(4, 'IV');
  unitMap.set(9, 'IX');
  unitMap.set(40, 'XL');
  unitMap.set(90, 'XC');
  unitMap.set(400, 'CD');
  unitMap.set(900, 'CM');

  const units = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let roman = '';

  for (let i = units.length - 1; i >= 0; i --) {
    while (num >= units[i]) {
      num -= units[i];
      roman += unitMap.get(units[i]);
    }
  }
  return roman;
};

console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(9));
console.log(intToRoman(58));
console.log(intToRoman(1994));
