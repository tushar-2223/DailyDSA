let nums = [1, 2, 1, 3, 6, 5, 4];

let n = nums.length;
// it shoupl be grether thank the left and right element

// o(n) solution
/*let peakElement = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (
      (i == 0 || nums[i] > nums[i - 1]) &&
      (i == nums.length - 1 || nums[i] > nums[i + 1])
    ) {
      return nums[i];
    }
  }
};*/

// o(1) solution
let peakElement2 = (nums, n) => {
  if (n === 0) return 0;
  if (nums[0] > nums[1]) return 1;
  if (nums[n - 1] > nums[n - 2]) return n - 1;

  let low = 1;
  let high = n - 2;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
      return mid;
    } else if (nums[mid] > nums[mid + 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};

// console.log(peakElement(nums);

console.log(nums[peakElement2(nums, n)]);
