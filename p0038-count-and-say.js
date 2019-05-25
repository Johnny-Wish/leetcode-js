/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
  let numbers = '1';
  const getNextHead = (index) => {
    do {
      index ++;
    } while (index < numbers.length && numbers[index] === numbers[index - 1]);
    return index;
  };

  for (i = 1; i < n; i ++) {
    let updatedNumbers = '';
    let head = 0;
    do {
      const char = numbers[head];
      const nextHead = getNextHead(head);
      updatedNumbers += (nextHead - head).toString();
      updatedNumbers += char;
      head = nextHead;
    } while (head < numbers.length);
    numbers = updatedNumbers;
    // console.log(numbers);
  }
  return numbers;
};

console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));
