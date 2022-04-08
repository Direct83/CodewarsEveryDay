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

// const validatePIN = (pin) =>
// 	(pin.length === 4 || pin.length === 6) && [...pin].every((symbol) => symbol == parseInt(symbol));

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

// const multiples = (m, n) => [...Array(m)].map((_, index) => (index + 1) * n);

// console.log(multiples(3, 5));

// const capitalize = (s, arr) =>
// 	arr.reduce((acc, el) => {
// 		const word = acc[el] ? acc[el].toUpperCase() : '';
// 		return acc.slice(0, el) + word + acc.slice(el + 1);
// 	}, s);

// console.log(capitalize('abcdef', [1, 2, 5, 100])); // 'aBCdeF'

// const hasSubpattern = (string) => /^(.*)\1+$/.test(string);

// console.log(hasSubpattern('abbaabbaabba')); // true

// function meeting(s) {
// 	const arr = s.toUpperCase().split(/:|;/g);
// 	return [...Array(arr.length / 2)]
// 		.map((el) => arr.splice(0, 2).reverse())
// 		.sort()
// 		.map((el) => `(${el[0]}, ${el[1]})`)
// 		.join('');
// }
// console.log(
// 	meeting(
// 		'Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn'
// 	)
// );
// console.log(
// 	meeting(
// 		'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill'
// 	)
// );

// const squares = (x, n) =>
// 	[...Array(n < 0 ? 0 : n)].reduce((acc, el, index) => {
// 		const lastNumber = acc[acc.length - 1];
// 		const number = lastNumber ? acc[acc.length - 1] * acc[acc.length - 1] : x;
// 		return acc.concat(number);
// 	}, []);

// console.log(squares(2, 1));

// const disariumNumber = (n) =>
// 	[...String(n)].reduce((acc, el, index) => {
// 		acc += el ** (index + 1);
// 		return acc;
// 	}, 0) === n
// 		? 'Disarium !!'
// 		: 'Not !!';

// console.log(disariumNumber(89)); // Disarium !!

// function findEvenIndex(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (0 === arr.slice(1).sum) {
// 			return 0;
// 		}
// 		if (arr.slice(0, i - 1).sum === arr.slice(i).sum) {
// 			return 3;
// 		}
// 	}
// 	return -1;
// }

// console.log(findEvenIndex());

// function addUsername(list) {
// 	return list.map((el) => {
// 		return {
// 			...el,
// 			username:
// 				el.firstName.toLowerCase() +
// 				el.lastName.slice(0, 1).toLowerCase() +
// 				(Date.prototype.getFullYear() - el.age).toString(),
// 		};
// 	});
// }

// const revrot = (str, sz) =>
// 	sz <= 0 || sz > str.length || str == ''
// 		? ''
// 		: str2chunks(str, sz)
// 				.map((chunk) =>
// 					isSumOfCubesOfDigitsOdd(chunk) ? rotate(chunk) : reverse(chunk)
// 				)
// 				.join('');

// const str2chunks = (s, c) => s.match(new RegExp('.{' + c + '}', 'g')) || [];
// const isSumOfCubesOfDigitsOdd = (str) => str.replace(/[02468]/g, '').length % 2;
// const rotate = (str) => str.slice(1) + str[0];
// const reverse = (str) => str.split('').reverse().join('');

// console.log(revrot('733049910872815764', 5)); // 330479108928157
// console.log(revrot('73304991087281576455176044327690580265896', 8)); // 1994033775182780067155464327690480265895

// const arrayLeaders = (numbers) =>
// 	numbers.filter((number, index) => {
// 		const rightNumbers = numbers
// 			.slice(index + 1)
// 			.reduce((total, number) => total + number, 0);
// 		return number > rightNumbers;
// 	});

// console.log(arrayLeaders([16, 17, 4, 3, 5, 2])); // [17,5,2]

// const nthSmallest = (arr, pos) => arr.sort((a, b) => a - b)[pos - 1];

// console.log(nthSmallest([3,1,2],2)) // 2

// // ёлочка
// const tree = (symbol, height) =>
// 	[...Array(height)]
// 		.map(
// 			(_, index) =>
// 				' '.repeat(height - index - 1) +
// 				symbol.repeat((index + 1) * 2 - 1) +
// 				' '.repeat(height - index - 1)
// 		)
// 		.join('\n');

// console.log(tree('8', 5));
// //    8
// //   888
// //  88888
// // 8888888
// //888888888

// // сортируем только не четные
// console.log([5, 7, 3, 9, 2, 6].sort((a, b) => a % 2 && a - b)); // [3,5,7,9,2,6]

// const average = (scores) =>
// 	Math.round(scores.reduce((a, b) => a + b) / scores.length);

// const scale = (str, numberRepetitions, quantity) =>
// 	!str
// 		? str
// 		: str
// 				.split('\n')
// 				.map((word) =>
// 					[...Array(quantity)]
// 						.map((_) =>
// 							[...word].map((el) => el.repeat(numberRepetitions)).join('')
// 						)
// 						.join('\n')
// 				)
// 				.join('\n');

// const scale = (str, numberRepetitions, quantity) => {
// 	if (str === '') {
// 		return '';
// 	}
// 	const words = str.split('\n');
// 	const resultArr = [];
// 	for (let i = 0; i < words.length; i++) {
// 		const innerWords = words[i].split('');
// 		const resultInnerWords = [];
// 		for (let i = 0; i < innerWords.length; i++) {
// 			resultInnerWords.push(innerWords[i].repeat(numberRepetitions));
// 		}
// 		resultArr.push((resultInnerWords.join('') + '\n').repeat(quantity));
// 	}
// 	return resultArr.join('').replace(/\n$/, '');
// };

// console.log(scale('abcd', 2, 3));
// console.log(scale('', 5, 5));
// console.log(scale('Kj\nSH', 1, 2)); // "Kj\nKj\nSH\nSH"

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// function add(a, b) {
// 	const result = '';
// 	const temp = 0;
// 	a = a.split('');
// 	b = b.split('');
// 	while (a.length || b.length || temp) {
// 		temp += ~~a.pop() + ~~b.pop();
// 		result = (temp % 10) + result;
// 		temp = temp > 9;
// 	}
// 	return result;
// }

// const factorial = (n) => {
// 	return n <= 1 ? 1 : n * factorial(n - 1);
// };

// const solve = (s) =>
// 	s.split(/[^aeiou]/).reduce((s, n) => Math.max(s, n.length), 0);

// console.log(solve('iiihoovaeaaaoougjyaw')); // 8

// const sortGiftCode = (code) => [...code].sort().join('')

// const greetDevelopers = (list) =>
// 	list.map((el) => ({ ...el, greeting: `Hi ${el.firstName}, what do you like the most about ${el.language}?` }));

// const getHiddenCard = (cardNumber, starsCount = 4) =>
// 	cardNumber.replace(new RegExp(`.{${cardNumber.length - starsCount}}`), '*'.repeat(starsCount));

// console.log(getHiddenCard('1234567812345678'));

// import { performance } from 'perf_hooks';

// const maxTests = 200;
// const testLoopLimit = 1000000;

// function runTest(index = 1, results = { usingVar: 0, usingLet: 0 }) {
// 	console.log(`Running Test #${index} of ${maxTests}`);
// 	setTimeout(() => {
// 		const varTime = usingVar();
// 		const letTime = usingLet();
// 		results.usingVar += varTime;
// 		results.usingLet += letTime;
// 		console.log(`Test ${index}: var = ${varTime.toFixed(2)}ms, let = ${letTime.toFixed(2)}ms`);
// 		++index;
// 		if (index <= maxTests) {
// 			setTimeout(() => runTest(index, results), 0);
// 		} else {
// 			console.log(`Average time with var: ${(results.usingVar / maxTests).toFixed(2)}ms`);
// 			console.log(`Average time with let: ${(results.usingLet / maxTests).toFixed(2)}ms`);
// 		}
// 	}, 0);
// }

// function usingVar() {
// 	const start = performance.now();
// 	let x = 0;
// 	for (var i = 0; i < testLoopLimit; i++) {
// 		x += i;
// 	}
// 	const endTime = performance.now();
// 	return endTime - start;
// }

// function usingLet() {
// 	const start = performance.now();
// 	let x = 0;
// 	for (let i = 0; i < testLoopLimit; i++) {
// 		x += i;
// 	}
// 	const endTime = performance.now();
// 	return endTime - start;
// }

// runTest();

// const pairs = (ar) =>
// 	[...Array(Math.ceil(ar.length / 2))].reduce((acc) => {
// 		const numbers = ar.splice(0, 2);
// 		const consecutiveNumbers = numbers[0] > numbers[1] ? numbers[0] - numbers[1] : numbers[1] - numbers[0];
// 		acc += consecutiveNumbers === 1 ? 1 : 0;
// 		return acc;
// 	}, 0);

// function toLeetSpeak(str) {
// 	const translation = {
// 		A: '@',
// 		B: '8',
// 		C: '(',
// 		E: '3',
// 		G: '6',
// 		H: '#',
// 		I: '!',
// 		L: '1',
// 		O: '0',
// 		S: '$',
// 		T: '7',
// 		Z: '2',
// 	};

// 	return [...str].reduce((acc, el) => acc + (translation[el] || el), '');
// }
// console.log(toLeetSpeak('LEET')); // "1337"

// const toNumberArray = (stringarray) => stringarray.map(Number);

// const FilterString = (value) => Number(value.replace(/\D/g, ''));

// console.log(FilterString('aa1bb2cc3dd'));

// function solve(a, b) {
// 	const first = a.replace(new RegExp(`[${b}]`, 'g'), '');
// 	const second = b.replace(new RegExp(`[${a}]`, 'g'), '');
// 	return first + second;
// }

// console.log(solve('xxx', 'xzca')); // zca

// const longestWord = (stringOfWords) =>
// 	stringOfWords.split(' ').reduce((acc, word) => (word.length >= acc.length ? word : acc), '');

// console.log(longestWord('red blue grey'));

// const spam = (number) => 'hue'.repeat(number);

// console.log(spam(14));

// const greet = (name) => (name ? `hello ${name}!` : null);

// const min = (arr, toReturn) => {
// 	const minValue = Math.min(...arr);
// 	return toReturn === 'value' ? minValue : arr.indexOf(minValue);
// };

// console.log(min([1, 2, 3, 4, 5], 'value'));
// console.log(min([1, 2, 3, 4, 5], 'index'));

// const vaporcode = (string) => [...string.replace(/\s/g, '').toUpperCase()].join('  ');

// console.log(vaporcode('Lets go to the movies'));

// const deleteNth1 = (arr, maxRepeats) =>
// 	arr.length
// 		? arr.reduce(
// 				(acc, number, index) => {
// 					acc.found[number] = ++acc.found[number] || 1;
// 					if (acc.found[number] <= maxRepeats) {
// 						acc.arr.push(number);
// 					}
// 					return index === arr.length - 1 ? acc.arr : acc;
// 				},
// 				{ found: {}, arr: [] }
// 		  )
// 		: arr;

// const deleteNth2 = (arr, maxRepeats, cache = {}) =>
// 	arr.filter((number) => {
// 		cache[number] = (cache[number] || 0) + 1;
// 		return cache[number] <= maxRepeats;
// 	});

// const nums = [1, 1, 1, 1, 2, 2, 2, 2];
// console.log(deleteNth1(nums, 2));

// const words = {
// 	zero: 0,
// 	one: 1,
// 	two: 2,
// 	three: 3,
// 	four: 4,
// 	five: 5,
// 	six: 6,
// 	seven: 7,
// 	eight: 8,
// 	nine: 9,
// 	ten: 10,
// 	eleven: 11,
// 	twelve: 12,
// 	thirteen: 13,
// 	fourteen: 14,
// 	fifteen: 15,
// 	sixteen: 16,
// 	seventeen: 17,
// 	eighteen: 18,
// 	nineteen: 19,
// 	twenty: 20,
// 	thirty: 30,
// 	forty: 40,
// 	fifty: 50,
// 	sixty: 60,
// 	seventy: 70,
// 	eighty: 80,
// 	ninety: 90,
// };
// const bigValueWords = { hundred: 100, thousand: 1000, million: 1000000 };
// const parseInt = (str) =>
// 	str.split(/ |-/).reduce((acc, word) => {
// 		if (words[word]) {
// 			acc += words[word];
// 		}
// 		if (bigValueWords[word]) {
// 			acc += bigValueWords[word] * (acc % bigValueWords[word]) - (acc % bigValueWords[word]);
// 		}
// 		return acc;
// 	}, 0);

// console.log(parseInt('seven hundred eighty-three thousand nine hundred and nineteen'));

// function toTime(seconds) {
// 	const hour = Math.floor(seconds / 3600);
// 	const minute = Math.floor((seconds % 3600) / 60);
// 	return `${hour} hour(s) and ${minute} minute(s)`;
// }

// console.log(toTime(3601));

// const last = (x) => x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));

// console.log(last('take me to semynak')); // ['take', 'me', 'semynak', 'to']

// const splitInParts = (string, partLength) =>
// 	string
// 		.match(new RegExp(`.{${partLength}}|.*`, 'g'))
// 		.join(' ')
// 		.trim();

// console.log(
// 	splitInParts(
// 		'ehzqsxcwoufblzajpxyzljasisozjnzelytqelqbbnspynxtthwjqknjiyojiuanlhdbgczugaxvunsdvbkxdudflfqdtmgljucnopgcdkvfaflescrgsmhcszmexeepymidenvwqcczlicotkymgrlgnurjrnslejblddffnlxzwhhrlqhjwmvzvtdfkxlcalyhasvmqsfpfkxcblzsqomjpjsljkdzlexxaxvoacgolglzdmgjudehsxeqlrjxzcnwauikudpasdnznrlecmgsgrhqrniajdqaomd',
// 		9
// 	)
// );

// const spacify = (str) => [...str].join(' ');

// console.log(spacify('hello world')); // 'h e l l o   w o r l d'

// const well = (inputArray) =>
// 	['Fail!', 'Publish!', 'Publish!', 'I smell a series!'][
// 		Math.min(3, inputArray.filter((idea) => idea === 'good').length)
// 	];
// // function well(inputArray) {
// // 	const goodCounter = inputArray.filter((idea) => idea === 'good').length;
// // 	const isSeries = goodCounter > 2 ? 'I smell a series!' : 'Publish!';
// // 	return goodCounter !== 0 ? isSeries : 'Fail!';
// // }
// console.log(well(['bad', 'bad', 'bad', 'bad']));

// const calculate = (str) =>
// 	str
// 		.split('plus')
// 		.join(' ')
// 		.split('minus')
// 		.join(' -')
// 		.split(' ')
// 		.reduce((a, i) => a + +i, 0);

// console.log(calculate('1plus2plus3minus4')); // 2

// const switcher = (x) => x.reduce((a, b) => a + ' ?!abcdefghijklmnopqrstuvwxyz'[29 - b], '');

// console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])); // 'codewars'

// console.log(switcher(['25', '7', '8', '4', '14', '23', '8', '25', '23', '29', '16', '16', '4'])); // 'btswmdsbd kkw'

// const num = '8888888811222333455666777777';

// const luckyNumber = (stringOfNumber) =>
// 	[...stringOfNumber].reduce(
// 		(acc, number, index) => {
// 			const isLastIndex = index === stringOfNumber.length - 1;
// 			acc.countNumber[number] = ++acc.countNumber[number] || 1;
// 			if (isLastIndex) {
// 				acc.luckyNumber = Object.entries(acc.countNumber).reduce((acc, [key, value]) => {
// 					acc = Number(key) === value ? value : acc;
// 					return acc;
// 				}, null);
// 			}
// 			return isLastIndex ? acc.luckyNumber : acc;
// 		},
// 		{ countNumber: {}, luckyNumber: null }
// 	);

// console.log(luckyNumber(num));

// const argQuery = 'user.name.firstname=Ivan&user.name.secondname=Vidutin&user.city=Perm';

// const queryObjectify = (query) => {
// 	const rootObject = {};
// 	query.split('&').forEach((chunk) => {
// 		const [keys, value] = chunk.split('=');
// 		let indicator = rootObject;
// 		keys.split('.').forEach((key, index, arr) => {
// 			if (!indicator[key]) {
// 				indicator[key] = index === arr.length - 1 ? value : {};
// 			}
// 			indicator = indicator[key];
// 		});
// 	});
// 	return rootObject;
// };

// console.log(queryObjectify(argQuery));

// const reverse = (array) => array.reduce((acc, el) => [el].concat(acc), []);

// console.log(reverse([1, 2, 3]));

// const incrementer = (numbers) => numbers.map((number, index) => (++index + number) % 10);

// console.log(incrementer([4, 6, 7, 1, 3])); // [ 5, 8, 0, 5, 8 ]

// function sum(digits) {
// 	try {
// 		const numbers = digits
// 			.toString()
// 			.split('')
// 			.map((symbol) => parseInt(symbol));
// 		return `${numbers.join(' + ')} = ${numbers.reduce((a, b) => a + b)}`;
// 	} catch (e) {
// 		return '';
// 	}
// }

// console.log(sum('268482898706045')); // 2 + 6 + 8 + 4 + 8 + 2 + 8 + 9 + 8 + 7 + 0 + 6 + 0 + 4 + 5 = 77

// const betweenExtremes = (numbers) => Math.max(...numbers) - Math.min(...numbers);

// console.log(betweenExtremes([21, 34, 54, 43, 26, 12])); // 42

// function digitsAverage(input) {
// 	if (input < 10) {
// 		return input;
// 	}
// 	while (input > 9) {
// 		input = String(input);
// 		let array = [];
// 		for (let i = 0; i < input.length - 1; i++) {
// 			array.push(Math.round((+input[i] + +input[i + 1]) / 2));
// 		}
// 		input = +array.join('');
// 	}
// 	return input;
// }

// console.log(digitsAverage(246)); // 4

// function findAB(numbers, c) {
// 	for (let i = 0; i < numbers.length; i++) {
// 		for (let j = 1 + i; j < numbers.length; j++) {
// 			if (numbers[i] * numbers[j] === c) {
// 				return [numbers[i], numbers[j]];
// 			}
// 		}
// 	}
// 	return null;
// }

// console.log(findAB([1, 2, 3], 3));

// const validSpacing = (s) => s.trim() === s && !s.includes('  ');

// console.log(validSpacing('RXd   ZqFy'));

// const reOrdering = (text) => text.replace(/(.+) ([A-Z]\w*)/, `$2 $1`);

// console.log(reOrdering('ming Yao'));
// console.log(reOrdering('bull color pig Patrick'));

// const hydrate = (s) => {
// 	const count = s.match(/\d/g).reduce((acc, el) => acc + Number(el), 0);
// 	const isPlural = count !== 1 ? 'es' : '';
// 	return `${count} glass${isPlural} of water`;
// };

// console.log(hydrate('2 glasses of wine and 1 shot')); // 3 glasses of water
// console.log(hydrate('1 beer')); // 1 glass of water

// const filterLucky = (arr) => arr.filter((number) => [...String(number)].includes('7'));

// console.log(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]));

// const pattern = (n) =>
// 	n < 1
// 		? ''
// 		: [...Array(n)].map((_, index) => `${++index}`.repeat(index)).join('\n');

// console.log(pattern(2));

// const findEvenIndex = (arr) =>
// 	arr.findIndex(
// 		(_, idx) =>
// 			arr.slice(0, idx + 1).reduce((pre, val) => pre + val) ===
// 			arr.slice(idx).reduce((pre, val) => pre + val)
// 	);

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));

// const summy = (stringOfInts) =>
// 	stringOfInts.split(' ').reduce((acc, number) => acc + Number(number), 0);

// console.log(summy('1 2 3')); // 6

// String.prototype.vowel = function () {
// 	return /^[aeiou]$/i.test(this);
// };

// console.log('E'.vowel()); // true
// console.log('lol'.vowel()) // false

// const sumOfIntegersInString = (s) =>
// 	s.split(/[^0-9]/).reduce((acc, number) => acc + Number(number), 0);

// console.log(sumOfIntegersInString('12.4'));

// const dbSort = (array) =>
// 	array.sort(
// 		(a, b) =>
// 			(typeof a === 'string') - (typeof b === 'string') || (a > b) - (a < b)
// 	);
// console.log(
// 	dbSort(['Apple', 46, '287', 574, 'Peach', '3', '69', 78, 'Grape', '423'])
// );
// // [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach']

// const problem = (x) => (typeof x === 'string' ? 'Error' : x * 50 + 6);

// const powersOfTwo = (n) => [...Array(n + 1)].map((_, index) => 2 ** index);

// const isPalindrome = (x) => [...x].reverse().join('').toLowerCase() === x.toLowerCase()

// const reverse = (string) => string.split(' ').reverse().join(' ')

// const formatMoney = (amount) => `$${amount.toFixed(2)}`;

// const nameShuffler = (str) => str.split(' ').reverse().join(' ')

// const explode = (s) => [...s].map(symbol => symbol.repeat(symbol)).join('');

// const addLength = (str) => str.split(' ').map((el) => `${el} ${el.length}`);

// const toBinary = (n) => +n.toString(2);

// String.prototype.isLetter = function () {
// 	return /^[a-zA-Z]$/g.test(this);
// };

// const reverse = (number) =>
// 	Math.sign(number) * [...String(Math.abs(number))].reverse().join('');

// console.log(reverse(-423)); // -324

// const isWalidWalk = (walk) =>
// 	walk.length + 1 !== 10 &&
// 	walk.reduce((acc, el, index) => {
// 		acc[el] = ++acc[el] || 1;
// 		return index === walk.length - 1 ? acc.n === acc.s && acc.w === acc.e : acc;
// 	}, {});

// console.log(isWalidWalk(['n', 's', 'w', 'e', 'n', 's', 'n', 's', 'w', 'e'])); // true

// const initializeNames = (name) =>
// 	name
// 		.split(' ')
// 		.reduce((acc, word, index, arr) => {
// 			if (index === 0 || index === arr.length - 1) {
// 				acc += word + ' ';
// 			}
// 			if (index !== 0 && index !== arr.length - 1) {
// 				acc += word[0] + '. ';
// 			}
// 			return acc;
// 		}, '')
// 		.trim();

// const initializeNames = (name) => name.replace(/ (\w)\w*(?= )/g, ' $1.');

// console.log(initializeNames('Alice Betty Catherine Davis'));

// const removeConsecutiveDuplicates = (s) =>
// 	s
// 		.split(' ')
// 		.reduce(
// 			(acc, _, index, arr) => [
// 				...acc,
// 				...(arr[index] !== arr[index + 1] ? [arr[index]] : []),
// 			],
// 			[]
// 		)
// 		.join(' ');

// console.log(
// 	removeConsecutiveDuplicates('alpha beta gamma delta alpha beta gamma delta')
// );

// const generateIntegers = (m, n) =>
// 	[...Array(n - m + 1)].map((_, index) => index + m);

// const countLettersAndDigits = (input) =>
// 	input.length - input.replace(/[0-9a-z]/gi, '').length;

// console.log(countLettersAndDigits('*14(K. 3'));

// const makeString = (string) =>
// 	string
// 		.split(' ')
// 		.map((word) => word[0])
// 		.join('');

// const giveMeFive = (obj) =>
// 	Object.entries(obj).reduce((acc, el) => {
// 		if (el[0].length === 5) {
// 			acc = acc.concat(el[0]);
// 		}
// 		if (el[1].length === 5) {
// 			acc = acc.concat(el[1]);
// 		}
// 		return acc;
// 	}, []);

// function palindrome(num) {
// 	if (typeof num === 'string' || num < 0) {
// 		return 'Not valid';
// 	}
// 	return [...String(num)].reverse().join('') === String(num);
// }

// const lastDigit = (n, d) => [...String(n)].splice(-d, d).map(Number);

// function args_count() {
// 	return arguments.length;
// }

// const solve = (s) =>
// 	Object.values(
// 		[...s].reduce((acc, el) => {
// 			if (/[A-Z]/.test(el)) {
// 				acc[1] = ++acc[1] || 1;
// 			}
// 			if (/[a-z]/.test(el)) {
// 				acc[2] = ++acc[2] || 1;
// 			}
// 			if (/[0-9]/.test(el)) {
// 				acc[3] = ++acc[3] || 1;
// 			}
// 			if (/[^\w]/.test(el)) {
// 				acc[4] = ++acc[4] || 1;
// 			}
// 			return acc;
// 		}, {})
// 	);

// console.log(solve('!@#$AAAaaaaa12'));

// const divisibleByThree = (str) =>
// 	[...str].reduce((a, b) => a + Number(b), 0) % 3 === 0;

// const cubeSum = (a, b) => Math.abs(a ** 2 * (a + 1) ** 2 - b ** 2 * (b + 1) ** 2) / 4;

// const root = (x, n) => Math.pow(x, 1/n)

// const validateWord = (string) =>
// 	[...string.toLowerCase()].reduce((acc, symbol, index, arr) => {
// 		acc[symbol] = ++acc[symbol] || 1;
// 		if (index === arr.length - 1) {
// 			const values = Object.values(acc);
// 			return values.every((el) => el === values[0]);
// 		}
// 		return acc;
// 	}, {});

// console.log(validateWord('Abcabc'));

// const checkThreeAndTwo = (array) =>
// 	array.reduce((acc, el, index, arr) => {
// 		acc[el] = ++acc[el] || 1;
// 		if (index === arr.length - 1) {
// 			return Object.values(acc).every((el) => [3, 2].includes(el));
// 		}
// 		return acc;
// 	}, {});

// console.log(checkThreeAndTwo(['a', 'a', 'a', 'b']));

// const uniqueSum = (lst) =>
// 	[...new Set(lst)].reduce((acc, number) => acc + number, null);

// console.log(uniqueSum([1, 3, 8, 1, 8])); // 12

// function isVeryEvenNumber(num) {
// 	while (String(num).length > 1) {
// 		num = [...String(num)].reduce((acc, nos) => acc + Number(nos), 0);
// 	}
// 	return num % 2 === 0;
// }

// console.log(
// 	isVeryEvenNumber(1234)
// 	// 0, 4, 12, 222, 5, 45, 4554, 1234, 88, 24, 400000220
// 	// true, true, false, true, false, false, false, false, false, true, true
// );

// const insertDash = (num) =>
// 	[...String(num)]
// 		.map((el, index, arr) => {
// 			if (el === '0' || index === arr.length - 1) {
// 				return el;
// 			}
// 			if (el % 2 !== 0 && arr[index + 1] % 2 !== 0) {
// 				return `${el}-`;
// 			}
// 			return el;
// 		})
// 		.join('');

// console.log(insertDash(3785555));

// const numberToPower = (number, power) =>
// 	[...Array(power)].reduce((acc) => acc * number, 1);

// console.log(numberToPower(10, 4));

// const stringClean=(s)=>s.replace(/[^a-z!\s~#$%^&!@*():;"'.,?]/ig,'')

// const getNumberFromString = (s) => Number(s.match(/\d/g).join(''));

// console.log(getNumberFromString('123'));

// function calculator(a, b, sign) {
// 	try {
// 		return eval(`${a}${sign}${b}`);
// 	} catch (e) {
// 		return 'unknown value';
// 	}
// }

// const typeOfSum = (a, b) => typeof (a + b);

// function Counter() {
// 	this.value = 0;
// }

// Counter.prototype.increase = function () {
// 	return this.value++;
// };

// Counter.prototype.getValue = function () {
// 	return this.value;
// };

// Counter.prototype.reset = function () {
// 	return (this.value = 0);
// };

// const counter = new Counter();
// console.log(counter.increase());

// function whatday(num) {
// 	const weekdays = [
// 		'Sunday',
// 		'Monday',
// 		'Tuesday',
// 		'Wednesday',
// 		'Thursday',
// 		'Friday',
// 		'Saturday',
// 	];
// 	return weekday[num - 1] || 'Wrong, please enter a number between 1 and 7';
// }

// console.log(whatday(1));

// const anyArrows = (arrows) =>
// 	arrows.filter((arrow) => arrow['damaged']).length < arrows.length;

// const Person = function () {
// 	const person = {
// 		_name: 'Leroy',
// 		_friends: [],
// 		fillFriends(friends) {
// 			this._friends = friends;
// 		},
// 	};
// 	return person;
// };

// const shortenToDate = (longDate) => longDate.replace(/,.*/g, '');

// console.log(shortenToDate('Friday May 2, 9am'));

// const reverseList = (list) => list.reverse();

// const distinct = (a) => [...new Set(a)];

// const validateCode = (code) => /^[1-3]/.test(code);

// console.log(validateCode(423));
// console.log(validateCode(323));

// const mergeArrays = (firstArray, secondArray) =>
// 	[...Array(Math.max(firstArray.length, secondArray.length))]
// 		.reduce((acc, _, i) => acc.concat(firstArray[i], secondArray[i]), [])
// 		.filter(Boolean);

// console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c']));

// const singleDigit = (n) =>
// 	String(n).length < 2
// 		? n
// 		: singleDigit(
// 				[...n.toString(2)].reduce((acc, number) => acc + Number(number), 0)
// 		  );

// console.log(singleDigit(5665));
// console.log(singleDigit(123456789));
// console.log(singleDigit(5));

// const getAverage = (marks) =>
// 	Math.floor(marks.reduce((acc, number) => acc + number, 0) / marks.length);

// const filterArray = (arr, target) =>
// 	arr.filter((name) => name.length === target);

// console.log(filterArray(['Олень', 'Сосна', 'Грибы', 'Береза', 'Медведь'], 6));

// const maxTriSum = (numbers) =>
// 	[...new Set(numbers)]
// 		.sort((a, b) => b - a)
// 		.slice(0, 3)
// 		.reduce((acc, number) => acc + number, 0);

// console.log(maxTriSum([3, 2, 6, 8, 2, 3]));

// function zeros(number) {
// 	let result = 0;
// 	while (number > 0) {
// 		number = Math.floor(number / 5);
// 		result += number;
// 	}

// 	return result;
// }

// console.log(zeros(30));

// class A {
// 	name() {
// 		return 'alpha';
// 	}
// 	hi() {
// 		return `bye ${this.name()}`;
// 	}
// }

// class B extends A {
// 	name() {
// 		return `${super.name()}/beta`;
// 	}
// 	hi() {
// 		return `hi ${this.name()}`;
// 	}
// }

// console.log(B.prototype.hi.call(new A()));

// function evaluate(str) {
// 	const [operator, number1, number2] = str.replace(/\(|\)/g, '').split(' ');

// 	return eval(number1 + operator + number2);
// }

// console.log(evaluate('(* 3 3)'));
// console.log(evaluate('(- 420 69)'));

// const shortcut = (string) => string.replace(/[aeiou]/g, '');

// const cookingTime = (eggs) => 5 * Math.ceil(eggs / 8);

// function getFirstPython(list) {
// 	const phytonUser = list.find((user) => user.language === 'Python');
// 	return phytonUser
// 		? `${phytonUser.firstName}, ${phytonUser.country}`
// 		: 'There will be no Python developers';
// }

// const jumpingNumber = (number) =>
// 	[...String(number)].every(
// 		(number, index, array) =>
// 			index < 1 || Math.abs(number - array[index - 1]) === 1
// 	)
// 		? 'Jumping!!'
// 		: 'Not!!';

// console.log(jumpingNumber(79));
// console.log(jumpingNumber(98789876));

// function calc(x) {
// 	const sum = (n) => [...n].reduce((a, b) => +a + +b);
// 	const total1 = x.replace(/./g, (x) => x.charCodeAt(0));
// 	const total2 = total1.replace(/7/g, '1');

// 	return sum(total1) - sum(total2);
// }

// console.log(calc('abcdef'));

// function outed(meet, boss) {
// 	const meetArray = Object.entries(meet);

// 	const averageRating =
// 		meetArray
// 			.map((el) => (el[0] === boss ? el[1] * 2 : el[1]))
// 			.reduce((acc, el) => acc + el) / meetArray.length;
// 	return averageRating <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
// }

// console.log(
// 	outed(
// 		{
// 			tim: 0,
// 			jim: 2,
// 			randy: 0,
// 			sandy: 7,
// 			andy: 0,
// 			katie: 5,
// 			laura: 1,
// 			saajid: 2,
// 			alex: 3,
// 			john: 2,
// 			mr: 0,
// 		},
// 		'laura'
// 	)
// );

// const catMouse = (x) => (x.length <= 5 ? 'Caught!' : 'Escaped!');

// console.log(catMouse('C....m'));

// const unluckyDays = (year) =>
// 	[...Array(12)].filter((_, index) => new Date(year, index, 13).getDay() === 5)
// 		.length;

// console.log(unluckyDays(1586));
// console.log(unluckyDays(1001));

// const specialNumber = (n) => (/[6-9]/.test(n) ? 'NOT!!' : 'Special!!');

// console.log(specialNumber(2));
// console.log(specialNumber(92));
// console.log(specialNumber(2783));

// const removeVowels = (str) => str.replace(/[aeiou]/g, '');
