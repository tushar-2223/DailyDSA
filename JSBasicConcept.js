const list1 = ["apple", "bananna", "apple", "bananna", "graps", "graps", "graps"];

let map = {};

for (let i = 0; i < list1.length; i++) {
  if (map[list1[i]]) {
    map[list1[i]] += 1;
  } else {
    map[list1[i]] = 1;
  }
}

console.log(Object.keys(map).filter((key) => map[key] > 1));
