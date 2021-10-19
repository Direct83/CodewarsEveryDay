function reverseNumber(n) {
	const number = Number([...String(Math.abs(n))].reverse().join(''))
	return n < 0 ? -number : number
}

console.log(reverseNumber(-123)) //-321
