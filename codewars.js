const minSum = (arr) => arr.sort((a, b) => a - b)
			.slice(0, arr.length/2)
			.reduce((acc, el, index) => acc += el * arr[arr.length - index - 1], 0)


console.log(minSum([5,4,2,3])) // 22
console.log(minSum([12,6,10,26,3,24])) // 342
