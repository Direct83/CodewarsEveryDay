// const solve = (str) => [...str].reduce((acc, el) => {
//    return el === el.toUpperCase()? ++acc : --acc
// 	}, 0) < 0 ? str.toLowerCase() : str.toUpperCase()


// console.log(solve("code"))
// console.log(solve("CODe"))
// console.log(solve("COde"))
// console.log(solve("Code"))

// function smallEnough(a, limit) {
// 	return a.every(el => el <= limit)
// }

// console.log(smallEnough([66, 101], 200))

// function sumOfMinimums(arr) {
// 	return arr.map(el => Math.min(...el)).reduce((a, b) => a + b)
// }

// console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))

// const isSortedAndHow = array => {
// 	const descending = array.filter((el, index, arr) => el > arr[index + 1]).length === 0
// 	const ascending = array.filter((el, index, arr) => el < arr[index + 1]).length === 0
// 	return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
// }

// console.log(isSortedAndHow([1, 2, 3, 4, 5]))
// console.log(isSortedAndHow([5, 4, 3, 2, 1]))
// console.log(isSortedAndHow([4, 3, 30]))

// const alphabetWar = (fight) => {
// 	const left ={
// 		w: 4,
// 		p: 3,
// 		b: 2,
// 		s: 1,
// 		m: -4,
// 		q: -3,
// 		d: -2,
// 		z: -1
// 	}

// 	const power = [...fight].reduce((acc, el) => {
// 		acc += left[el] || 0 + right[el] || 0
// 		return acc
// 	}, 0)

// 	if (power === 0) {
// 		return "Let's fight again!"
// 	}

// 	return  power > 0 ? "Left side wins!" : "Right side wins!"
// }

// console.log(alphabetWar("z"))
// console.log(alphabetWar("zdqmwpbs"))

// const palindromeChainLength = (number) => {
// 	const reverse = +[...String(number)].reverse().join('');
// 	return number - reverse && 1 + palindromeChainLength(reverse + number);
// };

// console.log(palindromeChainLength(87))
// console.log(palindromeChainLength(89))
// console.log(palindromeChainLength(10))

// function findLongest(array){
// 	const length = String(Math.max(...array)).length
// 	return array.find(el => String(el).length === length)
// }

// console.log(findLongest([8, 900, 500]))

// const partlist = array => array.map((_, index)=>
// 	[array.slice(0, index).join(' '), array.slice(index).join(' ')]
// ).slice(1)

// console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"])) //[["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]]

// function rowWeights(array){
// 	return array.reduce((acc, el, index) => {
// 		index % 2 === 0 ? acc[0] = acc[0] + el : acc[1] = acc[1] + el
// 		return acc
// 	}, [0, 0])
// }

// console.log(rowWeights([50,60,70,80])) //[120,140]

// const SequenceSum = (() => {
// 	function SequenceSum() {}

// 	SequenceSum.showSequence = (count) => {
// 		if(count < 0) {
// 			return `${count}<0`
// 		}
// 		const arrNumbers = [...Array(count + 1)].map((_, index) => index)
// 		const numbersSum = arrNumbers.reduce((a, b) => a + b, 0)

// 		return count === 0? '0=0' : `${arrNumbers.join('+')} = ${numbersSum}`
// 	};

// 	return SequenceSum;
// })();

// console.log(SequenceSum.showSequence(6)) //"0+1+2+3+4+5+6 = 21"
