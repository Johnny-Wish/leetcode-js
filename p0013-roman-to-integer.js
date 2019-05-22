/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  const map = new Map();
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);

  map.set('IV', 4);
  map.set('IX', 9);
  map.set('XL', 40);
  map.set('XC', 90);
  map.set('CD', 400);
  map.set('CM', 900);

  if (s === '') {
    return 0;
  }

  ans = 0;
  for (let i = 0; i < s.length; i ++) {
    if (i === s.length - 1) {
      ans += map.get(s[i]);
      break;
    }

    const subtraction = s.substring(i, i + 2);
    if (map.has(subtraction)) {
      ans += map.get(subtraction);
      i ++;
    } else {
      ans += map.get(s[i]);
    }
  }
  return ans;
};

console.log(romanToInt('I'));
console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('V'));
console.log(romanToInt('IX'));
console.log(romanToInt('X'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
