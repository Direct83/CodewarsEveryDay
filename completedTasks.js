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

// const findDigit = (num, nth) =>
// 	nth > 0 ? +[...`${num}`].reverse()[--nth] || 0 : -1;

// console.log(findDigit(5673, 4)) // 5
// console.log(findDigit(-456, 4)) // 0

// const f = (n) => {
// 	if(typeof n !== 'number' || !Number.isInteger(n) || n <= 0){
// 		return false
// 	}

// 	return n*(n+1)/2
// }

// console.log(f(100)) // 5050

// const repeats = (arr) => arr.filter((el, _ , m) =>
// 	m.filter(n => n === el).length === 1
// ).reduce((a, b)=> a + b)

// console.log(repeats([4,5,7,5,4,8])) // 15

// const containAllRots = (str, arr) => [...str].reduce((acc, _, i) => {
// 	acc.push(str.slice(-i) + str.slice(0, -i))
// 	return acc
// }, []).every(rot => arr.includes(rot))

// console.log(containAllRots("bsjq", ["bsjq", "qbsj", "jqbs", "sjqb", "twZNsslC", ]))

// const sumCubes = (n) => n === 1? 1: n**3 + sumCubes(n - 1)

// console.log(sumCubes(3))// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

// const evenNumbers = (array, number) => array.filter((el) => el % 2 === 0).slice(-number)

// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) // [4, 6, 8]

// const str = 'fdggsGFfgferhjg78d6fr86dg4r8g4'

// const fun = (str) => {
// 	return {
// 		str: str.match(/[a-z]/gi).filter((el, i, m) => m.lastIndexOf(el) === i),
// 		numbers: str.match(/\d/g).reduce((acc, el) => acc + Number(el), 0)
// 	}
// }

// console.log(fun(str))

// const vowelIndices = (word) => {
// 	const vowel =['a', 'e', 'i', 'o', 'u', 'y']
// 	return [...word].reduce((acc, el, i) => {
// 		vowel.includes(el) && acc.push(i + 1)
// 		return acc
// 	}, [])
// }

// console.log(vowelIndices("apple")) // [1,5]

// function mygcd(x,y){
// 	if (y > x) return mygcd(y, x);
// 	if (!y) return x;
// 	return mygcd(y, x % y);
// }

// console.log(mygcd(30,12)) // 6

// const automorphic = (n) =>
// 	RegExp(`${n}$`).test(n ** 2) ? 'Automorphic' : 'Not!!';

// console.log(automorphic(76));

// const multiplyAll = (arr) => (n) => arr.map((x) => n * x);

// console.log(multiplyAll([1, 2, 3])(1)); // [1, 2, 3]
// console.log(multiplyAll([1, 2, 3])(2)); // [2, 4, 6]

// function cubeOdd(arr) {
// 	if (arr.find((el) => typeof el !== 'number')) {
// 		return undefined;
// 	}
// 	return arr.reduce((acc, el, i) => {
// 		const number = el ** 3;
// 		acc = number % 2 !== 0 ? acc + number : acc;
// 		return acc;
// 	}, 0);
// }

// console.log(cubeOdd([1, 2, 3, 4])); // 28
// console.log(cubeOdd([-3, -2, 2, 3]));

// const generateShape = (integer) =>
// 	[...Array(integer)].map((_) => '+'.repeat(integer)).join('\n');

// console.log(generateShape(8)); // '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++'

// function validatePIN(pin) {
// 	if (pin.length === 4 || pin.length === 6) {
// 		return pin.split('').every((symbol) => !isNaN(symbol));
// 	}
// 	return false;
// }

// console.log(validatePIN('123 '));
// console.log(validatePIN('1234'));
// console.log(validatePIN('1234a'));
// console.log(validatePIN('123456'));
// console.log(validatePIN('000000'));

// const solve = (arr) => arr.find((el) => !arr.includes(-el));

// console.log(solve([1, -1, 2, -2, 3])); // 3
// console.log(solve([-3, 1, 2, 3, -1, -4, -2])); // -4

// const solution = (str, ending) => str.slice(str.length - ending.length) === ending;

// console.log(solution('abc', ''));

// const strong = (n) =>
// 	[...String(n)].reduce((acc, el) => {
// 		acc = acc + [...Array(Number(el))].reduce((acc, _, i) => acc * (i + 1), 1);
// 		return acc;
// 	}, 0) === n
// 		? 'STRONG!!!!'
// 		: 'Not Strong !!';

// console.log(strong(145)); // 'STRONG!!!!'

// function add(n) {
// 	return function Add(b) {
// 		return n + b;
// 	};
// }

// console.log(add(1)(3)) // 4

// function add(a, b) {
// 	let str = '';
// 	while (a || b) {
// 		str = (a % 10) + (b % 10) + str;
// 		a = Math.floor(a / 10);
// 		b = Math.floor(b / 10);
// 	}
// 	return +str;
// }

// console.log(add(11, 99)); // 1010
// console.log(add(122, 81)); // 1103
// console.log(add(38810, 1383)); // 391193

// const count = (array) =>
// 	array.reduce((acc, el) => {
// 		acc[el] = ++acc[el] || 1;
// 		return acc;
// 	}, {});

// console.log(count(['a', 'a', 'b', 'b', 'b'])); // { 'a': 2, 'b': 3 }

// const largestPairSum = (number) =>
// 	number
// 		.sort((a, b) => b - a)
// 		.slice(0, 2)
// 		.reduce((a, b) => a + b, 0);

// console.log(largestPairSum([10,14,2,23,19])); // 42

// const switcheroo = (x) => x.replace(/[ab]/g, (x) => (x === 'a' ? 'b' : 'a'));

// console.log(switcheroo('acb')); // bca

// const maxProduct = (numbers, size) =>
// 	numbers
// 		.sort((a, b) => b - a)
// 		.slice(0, size)
// 		.reduce((acc, el) => acc * el, 1);

// console.log(maxProduct([4,3,5], 2)); // 20

// const greet = (name) => `Hello ${name[0].toUpperCase() + name.slice(1)}!`;

// console.log(greet('riley')) // 'Hello Riley!'

// const greet = (name) =>
// 	`Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;

// console.log(greet('riley')); // 'Hello Riley!'
// console.log(greet('BILLY')); // 'Hello Billy!'

// const streetFighterSelection = (fighters, [i, j], moves) => {
// 	return moves.map((move) => {
// 		if (move === 'up') i = Math.max(i - 1, 0);
// 		if (move === 'down') i = Math.min(i + 1, 1);
// 		if (move === 'left') j = (j - 1 + 6) % 6;
// 		if (move === 'right') j = (j + 1 + 6) % 6;

// 		return fighters[i][j];
// 	});
// };

// const fighters = [
// 	['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
// 	['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
// ];

// const moves = ['up', 'left', 'right', 'left', 'left'];
// console.log(streetFighterSelection(fighters, [0, 0], moves));

// const encode = (str, num) =>
// 	[...str].map(
// 		(el, i) =>
// 			el.charCodeAt(0) - 96 + Number(String(num)[i % String(num).length])
// 	);

// console.log(encode('scout', 1939)); // [ 20, 12, 18, 30, 21]
// function even_or_odd(number) {
// 	if (number % 2 == 0) {
// 		return 'Even';
// 	}
// 	return 'Odd';
// }

// console.log(even_or_odd(2), 'Even');
// console.log(even_or_odd(0), 'Even');
// console.log(even_or_odd(7), 'Odd');
// console.log(even_or_odd(1), 'Odd');

// const helloWorld = () => {
// 	var str="Hello World!"
// 	console.log(str)
//   }

// const sum = (firstNumber, result = firstNumber) =>
// 	(next = (secondNumber) => {
// 		if (secondNumber !== undefined) {
// 			result += secondNumber;
// 			return next;
// 		}
// 		return result;
// 	});

// console.log(sum(1)()); // 1
// console.log(sum(1)(2)()); // 3
// console.log(sum(1)(2)(3)()); // 6
// console.log(sum(1)(2)(3)(4)()); // 10
// console.log(sum(1)(2)(3)(4)(5)()); // 15

// const getEvenNumbers = numbersArray => numbersArray.filter(a => a % 2 === 0);

// function prime(num) {
// 	return [...Array(num)].reduce((acc, el, i) => {
// 		const number = i + 1;
// 		return acc.concat((isPrime(number) && number) || []);
// 	}, []);
// }

// function isPrime(number) {
// 	for (let i = 2; i <= Math.sqrt(number); i++) {
// 		if (number % i === 0) return false;
// 	}
// 	return number !== 1;
// }

// console.log(prime(23)); // [2, 3, 5, 7, 11, 13, 17, 19, 23];

// const inviteMoreWomen = (L) => L.reduce((acc, el) => acc + el, 0) > 0;

// console.log(inviteMoreWomen([1, -1, 1])); // true
// console.log(inviteMoreWomen([1, -1])); // false

// const countRedBeads = (n) => (n ? (n - 1) * 2 : n);

// console.log(countRedBeads(0)); // 0
// console.log(countRedBeads(5)); // 8

// const findDeletedNumber = (arr, mixArr) =>
// 	arr.find((el) => !mixArr.includes(el)) || 0;

// console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5])); // 2
// console.log(findDeletedNumber([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])); // 0

// class Dinglemouse {
// 	constructor(firstName, lastName) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	}

// 	getFullName() {
// 		return `${this.firstName} ${this.lastName}`.trim();
// 	}
// }

// console.log(new Dinglemouse('Clint', 'Eastwood').getFullName()); // Clint Eastwood
// console.log(new Dinglemouse('', 'Eastwood').getFullName()); // Eastwood

// const alternateCase = (string) =>
// 	[...string].reduce((acc, el) => {
// 		const alternateCase =
// 			el.toUpperCase() === el ? el.toLowerCase() : el.toUpperCase();
// 		return acc + alternateCase;
// 	}, '');

// console.log(alternateCase('abc'));
// console.log(alternateCase('ABC'));

// function calculate(num1, operation, num2) {
// 	if (/\w/.test(operation) || (/\//.test(operation) && num2 === 0)) {
// 		return null;
// 	}
// 	switch (operation) {
// 		case '+':
// 			return num1 + num2;
// 		case '-':
// 			return num1 - num2;
// 		case '/':
// 			return num1 / num2;
// 		case '*':
// 			return num1 * num2;
// 	}
// }

// console.log(calculate(3.2, '+', 8));
// console.log(calculate(-3, '/', 0));
// console.log(calculate(-3, 'm', 0));

// const toUnderscore = (string) =>
// 	String(string)
// 		.replace(/(.)([A-Z])/g, '$1_$2')
// 		.toLowerCase();

// console.log(toUnderscore('TestController')); // test_controller
// console.log(toUnderscore('App7Test')); // app7_test

// const hasUniqueChars = (str) => new Set(str).size === str.length;

// console.log(hasUniqueChars('  nAa')); // false
// console.log(hasUniqueChars("abcdef")) // true

// const maxDiff = (list) =>
// 	list.length ? Math.max(...list) - Math.min(...list) : 0;

// console.log(maxDiff([0, 1, 2, 3, 4, 5, 6])); // 6
// console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6])) // 11

// const removeRotten = (bagOfFruits) =>
// 	!bagOfFruits
// 		? []
// 		: bagOfFruits.reduce((acc, el) => {
// 				const word = el.replace(/(rotten)/g, '').toLowerCase();
// 				return acc.concat(word);
// 		  }, []);

// console.log(
// 	removeRotten([
// 		'rottenApple',
// 		'rottenBanana',
// 		'rottenApple',
// 		'rottenPineapple',
// 		'rottenKiwi',
// 	])
// );

// const sevenAte9 = (str) => str.replace(/79(?=7)/g, '7')

// console.log(sevenAte9('7979797')) // 7777

// const solve = (s) => Math.max(...s.match(/\d+/g));

// console.log(solve('gh12cdy695m1')); // 695
