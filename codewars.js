const fizzbuzz = (n) => {
	return [...Array(n)].map((el,i) => {
		const index = i + 1;
		if (index % 3 === 0 && index % 5 === 0) {
			return 'FizzBuzz'
		}

		if (index % 3 === 0) {
			return 'Fizz'
		}

		if (index % 5 === 0) {
			return 'Buzz'
		}

		return index
	})
}


console.log(fizzbuzz(10)) // [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']
