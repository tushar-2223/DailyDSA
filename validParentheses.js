let s = '(){[]}';

function validParentheses(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }

      let last = stack[stack.length - 1];

      if ((s[i] === ')' && last === '(') || (s[i] === ']' && last === '[') || (s[i] === '}' && last === '{')) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(validParentheses(s));