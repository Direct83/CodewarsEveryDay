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

// const predictAge = (...args) => Math.floor(Math.hypot(...args)/2)

// console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))

// const wordsToMarks = (str) => [...str].reduce((acc,el) => acc += el.charCodeAt()-96, 0)

// console.log(wordsToMarks('ab'))

// const removeExclamationMarks = s => s.replace(/!/g, '');

// function sumTriangularNumbers(n) {
// 	if (n < 0) {
// 		return 0
// 	}

// 	const sum = sumTriangularNumbers(n-1)
// 	return sum + (n * (n + 1)) / 2
// }

// console.log(sumTriangularNumbers(6))

// const flattenAndSort = (array) => array
// 	.reduce((acc, el) => [...acc, ...el],[])
// 	.sort((a, b) => a - b);


// console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]))

// const minSum = (arr) => arr.sort((a, b) => a - b)
// 			.slice(0, arr.length/2)
// 			.reduce((acc, el, index) => acc += el * arr[arr.length - index - 1], 0)


// console.log(minSum([5,4,2,3])) // 22
// console.log(minSum([12,6,10,26,3,24])) // 342

// const factorial = (n) => n === 0 ? 1 : n * factorial(n - 1)

// const halvingSum = (n) => n ? n + halvingSum(Math.floor(n/2)) : 0

// console.log(halvingSum(25))

// function menFromBoys(arr){
// 	const arrUniq = [...new Set(arr)]
// 	const even = arrUniq.filter(el => el % 2 === 0).sort((a, b) => a - b)
// 	const odds = arrUniq.filter(el => el % 2).sort((a, b) => b - a)
// 	return [...even, ...odds]
// }

// console.log(menFromBoys([2,43,95,90,37]))
// console.log(menFromBoys([2,15,17,15,2,10,10,17,1,1]))

// const repeater = (string, n) => string.repeat(n)

// const solve = (arr) => arr.map(el =>
// 	[...el.toLowerCase()].reduce((acc, el, i)=> Number(el.charCodeAt()-96 === i + 1) + acc
// , 0))


// console.log(solve(["abode","ABc","xyzD"]))  // [4, 3, 1]

// const maxNumber = (n) => Number([...String(n)].sort((a, b) => b - a).join(''))

// console.log(maxNumber(123))  // 321

// function adjacentElementsProduct(array) {
// 	return array.reduce((acc, el, i, m) => {
// 		const number = m[i + 1] * el
// 		acc = number > acc ? number : acc
// 		return acc
// 	}, array[0] * array[1])
// }
// console.log(adjacentElementsProduct([5, 8])) // 40
// console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])) // -14
// console.log(adjacentElementsProduct([ -714, 682 ])) //-486948

// const solve = (arr) => arr.filter((el, i, m) => m.lastIndexOf(el) === i)


// console.log(solve([3,4,4,3,6,3])) //[4,6,3]

// function reverseNumber(n) {
// 	const number = Number([...String(Math.abs(n))].reverse().join(''))
// 	return n < 0 ? -number : number
// }

// console.log(reverseNumber(-123)) //-321

// const orderedCount = text => [...new Set([...text])].map(el => [el, text.split(el).length - 1])


// console.log(orderedCount("abracadabra")) // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
// console.log(orderedCount('233312')) // [ [ '2', 2 ], [ '3', 3 ], [ '1', 1 ] ]

// const fizzbuzz = (n) => {
// 	return [...Array(n)].map((el,i) => {
// 		const index = i + 1;
// 		if (index % 3 === 0 && index % 5 === 0) {
// 			return 'FizzBuzz'
// 		}

// 		if (index % 3 === 0) {
// 			return 'Fizz'
// 		}

// 		if (index % 5 === 0) {
// 			return 'Buzz'
// 		}

// 		return index
// 	})
// }


// console.log(fizzbuzz(10)) // [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']

// const list1 = [
// 	{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
// 	{ firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
// 	{ firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
// 	{ firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];

// const list2 = [
// 		{ firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
// 		{ firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
// ];
// const countDevelopers = list => list.filter(el => el.continent === 'Europe' && el.language === 'JavaScript').length

// console.log(countDevelopers(list1)) // 1
// console.log(countDevelopers(list2)) // 0

// const myLanguages = (results) => Object.keys(results).filter(r => results[r] > 59).sort((a, b) => results[b] - results[a])

// console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65})) // ["Ruby", "Python"]
// console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93})) // ["Dutch", "Greek", "Hindi"]
