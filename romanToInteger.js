/** @format */

const romanToInteger = (s) => {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && romanMap[s[i]] < romanMap[s[i + 1]]) {
      ans += romanMap[s[i + 1]] - romanMap[s[i]];
      i++;
    } else {
      ans += romanMap[s[i]];
    }
  }

  return ans;
};

console.log(romanToInteger('III'));
