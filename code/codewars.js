const deleteNth1 = (arr, maxRepeats) =>
	arr.length
		? arr.reduce(
				(acc, number, index) => {
					acc.found[number] = ++acc.found[number] || 1;
					if (acc.found[number] <= maxRepeats) {
						acc.arr.push(number);
					}
					return index === arr.length - 1 ? acc.arr : acc;
				},
				{ found: {}, arr: [] }
		  )
		: arr;

const deleteNth2 = (arr, maxRepeats, cache = {}) =>
	arr.filter((number) => {
		cache[number] = (cache[number] || 0) + 1;
		return cache[number] <= maxRepeats;
	});

const nums = [1, 1, 1, 1, 2, 2, 2, 2];
console.log(deleteNth1(nums, 2));
