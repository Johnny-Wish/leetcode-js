/**
 * @param {string} s
 * @return {boolean}
 */
const isNumber = function(s) {
  const isDigit = (char) => {
    const code = char.charCodeAt(0);
    // console.log(`code of '${char}' is ${code}`);
    return 48 <= code && code <= 48 + 9;
  };
  const isSign = (char) => char === '+' || char === '-';
  const isE = (char) => char === 'e';
  const isPoint = (char) => char === '.';
  const illegal = (char) => !(isDigit(char) || isSign(char) || isE(char) ||
    isPoint(char));

  s = s.trim();
  if (s.length === 0) {
    // console.log('empty string');
    return false;
  }
  if (s.startsWith('+') || s.startsWith('-')) {
    s = s.substring(1);
  } else if (! (isDigit(s[0]) || isPoint(s[0]))) {
    // console.log('illegal first char', s[0]);
    return false;
  }
  if (s === '.') {
    // console.log('only digit');
    return false;
  }

  if (s.length === 0) {
    return false;
  }

  let e = false;
  let point = false;
  let digitBeforeE = false;
  let digitAfterE = false;
  let sign = false;

  for (const char of s) {
    if (illegal(char)) {
      // console.log(`illegal char '${char}'`);
      return false;
    } else if (isPoint(char)) {
      if (e) {
        // console.log('point after e');
        return false;
      }
      if (point) {
        // console.log('duplicate point');
        return false;
      } else {
        point = true;
      }
    } else if (isE(char)) {
      if (!digitBeforeE) {
        return false;
      }
      if (e) {
        // console.log('duplicate e');
        return false;
      } else {
        e = true;
      }
    } else if (isDigit(char)) {
      if (e) {
        digitAfterE = true;
      } else {
        digitBeforeE = true;
      }
    } else if (isSign) {
      if (!e) {
        // console.log('sign before e');
        return false;
      } else if (sign) {
        // console.log('duplicate sign');
        return false;
      } else if (digitAfterE) {
        // console.log('sign after digit after e');
        return false;
      } else {
        sign = true;
      }
    }
  }
  if (e && !digitAfterE) return false;
  return true;
};


const strs = [];
console.log('below should be true');
strs.push('1');
strs.push('12');
strs.push('0.1234');
strs.push('0.1234e431');
strs.push('1234e431 ');
strs.push('4e-431');
strs.push('0');
strs.push('1 ');
for (const s of strs) {
  console.log(isNumber(s), isNumber('  -' + s), isNumber('+' + s),
      isNumber('-' + s));
}

console.log('\nbelow should be false');
strs.splice(0, strs.length);
strs.push(' - 1 e 10 ');
strs.push('e');
strs.push('1e');
strs.push('e1');
strs.push('1.1e');
strs.push('1e1.1');
strs.push('a');
strs.push('1234a');
strs.push('1234e23412e21');
strs.push('1e1-1');
strs.push('.');

for (const s of strs) {
  console.log(isNumber(s), isNumber('  -' + s), isNumber('+' + s),
      isNumber('-' + s));
}
