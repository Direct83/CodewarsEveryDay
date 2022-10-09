const listToArray = (list) =>
	list ? [list.value, ...listToArray(list.next)] : [];

console.log(
	listToArray({ value: 1, next: { value: 2, next: { value: 3, next: null } } })
);
