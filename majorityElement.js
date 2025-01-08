const majorityElement = (nums) => {
    let elementStack = [];

    for (let i = 0; i < nums.length; i++) {
        if(elementStack.length === 0 || elementStack[elementStack.length - 1] === nums[i]) {
            elementStack.push(nums[i]);
        } else {
            elementStack.pop();
        }
    }

    return elementStack[0];
};

//solution 2
const majorityElement2 = (nums) => {
    let map = {};
    let majority = nums.length / 2;

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }

        if (map[nums[i]] > majority) {
            return nums[i];
        }
    }

    return -1;
};

console.log(majorityElement2([3, 2, 3]));