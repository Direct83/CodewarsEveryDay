const killer = (suspectInfo, dead) =>
	Object.entries(suspectInfo).find(
		(el) => el[1].filter((el) => dead.includes(el)).length === dead.length
	)[0];

console.log(
	killer(
		{
			James: ['Jacob', 'Bill', 'Lucas'],
			Johnny: ['David', 'Kyle', 'Lucas'],
			Peter: ['Lucy', 'Kyle'],
		},
		['Lucas', 'Bill']
	)
);
// function getMissingNumbers(arr) {
// 	const unique = new Set(arr);
// 	const max = Math.max(...arr);

// 	return unique.size === 1
// 		? [2]
// 		: [...Array(max)].flatMap((_, index) =>
// 				unique.has(index + 1) ? [] : index + 1
// 		  );
// }

// console.log(getMissingNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
// console.log(getMissingNumbers([1, 10]));
// console.log(getMissingNumbers([1, 2]));
