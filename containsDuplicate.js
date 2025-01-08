const containsDuplicate = (nums) => {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            return true;
        } else {
            map[nums[i]] = 1;
        }
    }
    return false;
};