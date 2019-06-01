/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function(path) {
  const segments = path.split('/');
  const stack = [];
  for (const seg of segments) {
    if (seg === '' || seg === '.') {
      continue;
    }
    if (seg === '..') {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(seg);
    }
  }
  let canonicalPath = '';
  if (stack.length === 0) {
    return '/';
  }
  for (const seg of stack) {
    canonicalPath += '/';
    canonicalPath += seg;
  }
  return canonicalPath;
};


console.log(simplifyPath('/home/'));
console.log(simplifyPath('/../'));
console.log(simplifyPath('/home//foo/'));
console.log(simplifyPath('/a/./b/../../c/'));
console.log(simplifyPath('/a/../../b/../c//.//'));
console.log(simplifyPath('/a//b////c/d//././/..'));
