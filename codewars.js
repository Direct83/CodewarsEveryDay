const SequenceSum = (() => {
	function SequenceSum() {}

	SequenceSum.showSequence = (count) => {
		if(count < 0) {
			return `${count}<0`
		}
		const arrNumbers = [...Array(count + 1)].map((_, index) => index)
		const numbersSum = arrNumbers.reduce((a, b) => a + b, 0)

		return count === 0? '0=0' : `${arrNumbers.join('+')} = ${numbersSum}`
	};

	return SequenceSum;
})();

console.log(SequenceSum.showSequence(6)) //"0+1+2+3+4+5+6 = 21"
