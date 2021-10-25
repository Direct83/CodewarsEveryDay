const repeats = (arr) => arr.filter((el, _ , m) =>
	m.filter(n => n === el).length === 1
).reduce((a, b)=> a + b)


console.log(repeats([4,5,7,5,4,8])) // 15
