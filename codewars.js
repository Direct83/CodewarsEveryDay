const arrayLeaders = (numbers) =>
	numbers.filter((number, index) => {
		const rightNumbers = numbers
			.slice(index + 1)
			.reduce((total, number) => total + number, 0);
		return number > rightNumbers;
	});

console.log(arrayLeaders([16, 17, 4, 3, 5, 2])); // [17,5,2]
