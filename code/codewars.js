function solve(n) {
	let count = 0
	const num = [10, 20, 50, 100, 200, 500]
	num.reverse().forEach(item => {
	  count += Math.floor(n / item)
	  n = n % item
	})
	return n ? -1 : count;
  }
