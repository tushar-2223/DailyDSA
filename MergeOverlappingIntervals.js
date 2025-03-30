const merge = (intervals) => {
    if (intervals.length === 0) return [];
    
    intervals.sort((a, b) => a[0] - b[0]);

    var result = [];
    var current = intervals[0];
    for (var i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= current[1]) {
            current[1] = Math.max(current[1], intervals[i][1]);
        } else {
            result.push(current);
            current = intervals[i];
        }
    }
    result.push(current);
    return result;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));