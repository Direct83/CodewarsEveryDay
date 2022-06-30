const mostFrequentItemCount = (collection) =>
	Math.max(
		...Object.values(
			collection.reduce(
				(acc, el) => {
					acc[el] = ++acc[el] || 1;
					return acc;
				},
				{ 0: 0 }
			)
		)
	);

console.log(
	mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])
);
console.log(mostFrequentItemCount([]));
