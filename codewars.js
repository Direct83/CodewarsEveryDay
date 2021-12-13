const nthSmallest = (arr, pos) => arr.sort((a, b) => a - b)[pos - 1];

console.log(nthSmallest([3, 1, 2], 2)); // 2
