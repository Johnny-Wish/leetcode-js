/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = function(words, maxWidth) {
  let length = 0;
  const row = [];
  const output = [];
  for (let i = 0; i < words.length; i ++) {
    newLength = length + words[i].length + 1;
    if (row.length === 0) {
      newLength --;
    }
    // console.log(`length = ${length}, newLength = ${newLength}`);
    if (newLength <= maxWidth) {
      row.push(words[i]);
      // console.log(`\tproceeding, row = ${row}`)
      length = newLength;
    } else {
      output.push(justifyRow(row, maxWidth - length + row.length - 1));
      // console.log(`\tABORTING, pushed = ${output[output.length - 1]}`)
      row.length = 0;
      length = 0;
      i --;
    }
  }
  output.push(leftJustifyRow(row, maxWidth - length));
  return output;
};

const justifyRow = (words, spaceCount) => {
  if (words.length === 0) {
    console.log(`Error: words empty, spaceCount = ${spaceCount}`);
  }
  if (words.length === 1) {
    let s = words[0];
    for (let i = 0; i < spaceCount; i ++) {
      s += ' ';
    }
    return s;
  }
  // console.log(`handling words = ${words}, spaceCount = ${spaceCount}`)
  const lower = Math.floor(spaceCount / (words.length - 1));
  const extra = spaceCount - lower * (words.length - 1);

  let space = '';
  for (let i = 0; i < lower; i ++) {
    space += ' ';
  }

  let s = '';
  for (let i = 0; i < words.length - 1; i ++) {
    s += words[i];
    s += space;
    if (i < extra) {
      s += ' ';
    }
  }
  s += words[words.length - 1];
  return s;
};

const leftJustifyRow = (words, extra) => {
  let s = '';
  for (let i = 0; i < words.length - 1; i ++) {
    s += words[i];
    s += ' ';
  }
  s += words[words.length - 1];
  for (let i = 0; i < extra; i ++) {
    s += ' ';
  }
  return s;
};

const verifyOutput = (output) => {
  for (const line of output) {
    console.log(`'${line}', length = ${line.length}`)
  }
}

// console.log('"' + justifyRow(['example', 'of', 'text'], 3) + '"');
// console.log('"' + leftJustifyRow(['example', 'of', 'text'], 1) + '"');
//
// words = ["This", "is", "an", "example", "of", "text", "justification."]
// maxWidth = 16;
// verifyOutput(fullJustify(words, maxWidth));
//
// words = ["What","must","be","acknowledgment","shall","be"]
// maxWidth = 16;
// verifyOutput(fullJustify(words, maxWidth));
//
// words = ["Science","is","what","we","understand","well","enough","to","explain",
         // "to","a","computer.","Art","is","everything","else","we","do"]
// maxWidth = 20
// verifyOutput(fullJustify(words, maxWidth));

words = ["Listen","to","many,","speak","to","a","few."];
maxWidth = 6
output = fullJustify(words, maxWidth);
verifyOutput(output);
console.log(output[0])
