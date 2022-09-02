const fizzBuzzCuckooClock = (time) =>
	(([hour, minute]) =>
		!minute
			? `Cuckoo `.repeat(hour % 12 || 12).trim()
			: !(minute % 30)
			? `Cuckoo`
			: !(minute % 15)
			? `Fizz Buzz`
			: !(minute % 5)
			? `Buzz`
			: !(minute % 3)
			? `Fizz`
			: `tick`)(time.split(`:`).map(Number));

console.log(fizzBuzzCuckooClock('13:34'));
