const filterArray = (arr, target) =>
	arr.filter((name) => name.length === target);

console.log(filterArray(['Олень', 'Сосна', 'Грибы', 'Береза', 'Медведь'], 6));
