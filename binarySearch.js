const binarySearch = (nums, low, high, target) => {
    if (low > high) return -1;

    let mid = Math.floor((low + high) / 2);

    if (nums[mid] == target) return mid;
    else if (target > nums[mid]) {
        return binarySearch(nums, mid + 1, high, target);
    }
    return binarySearch(nums, low, mid - 1, target);
}

const search = function (nums, target) {
    return binarySearch(nums, 0, nums.length - 1, target);
};

console.log(search([-1,1,2,4,5,9,10,11,12],9))