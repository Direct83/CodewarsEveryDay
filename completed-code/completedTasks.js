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

// const list1 = [
// 	{
// 		firstName: 'Noah',
// 		lastName: 'M.',
// 		country: 'Switzerland',
// 		continent: 'Europe',
// 		age: 19,
// 		language: 'C',
// 	},
// 	{
// 		firstName: 'Anna',
// 		lastName: 'R.',
// 		country: 'Liechtenstein',
// 		continent: 'Europe',
// 		age: 52,
// 		language: 'JavaScript',
// 	},
// 	{
// 		firstName: 'Ramon',
// 		lastName: 'R.',
// 		country: 'Paraguay',
// 		continent: 'Americas',
// 		age: 29,
// 		language: 'Ruby',
// 	},
// 	{
// 		firstName: 'George',
// 		lastName: 'B.',
// 		country: 'England',
// 		continent: 'Europe',
// 		age: 81,
// 		language: 'C',
// 	},
// ];

// const countLanguages = (list) =>
// 	list.reduce((acc, people) => {
// 		acc[people.language] = ++acc[people.language] || 1;
// 		return acc;
// 	}, {});

// console.log(countLanguages(list1));

// const sumRange = (start, end) => ((end + start) * (end - start - 1) * -1) / 2;

// console.log(sumRange(10, 1));

// function houseNumbersSum(inputArray) {
// 	const index = inputArray.findIndex((el) => el === 0);

// 	return inputArray.slice(0, index).reduce((acc, number) => acc + number, 0);
// }

// console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));

// function sumOfN(n) {
// 	const array = [];
// 	array[0] = 0;
// 	for (let i = 1; i < Math.abs(n) + 1; i++) {
// 		if (n > 0) array[i] = array[i - 1] + i;
// 		else array[i] = array[i - 1] - i;
// 	}
// 	return array;
// }

// console.log(sumOfN(3));

// function solve(n) {
// 	let count = 0
// 	const num = [10, 20, 50, 100, 200, 500]
// 	num.reverse().forEach(item => {
// 	  count += Math.floor(n / item)
// 	  n = n % item
// 	})
// 	return n ? -1 : count;
//   }

// const lostSheep = (friday, saturday, total) =>
// 	friday.concat(saturday).reduce((acc, el) => acc - el, total);

// console.log(lostSheep([1, 2], [3, 4], 15));

// const list1 = [
// 	{
// 		firstName: 'Daniel',
// 		lastName: 'J.',
// 		country: 'Aruba',
// 		continent: 'Americas',
// 		age: 42,
// 		language: 'JavaScript',
// 	},
// 	{
// 		firstName: 'Kseniya',
// 		lastName: 'T.',
// 		country: 'Belarus',
// 		continent: 'Europe',
// 		age: 22,
// 		language: 'JavaScript',
// 	},
// 	{
// 		firstName: 'Hanna',
// 		lastName: 'L.',
// 		country: 'Hungary',
// 		continent: 'Europe',
// 		age: 65,
// 		language: 'JavaScript',
// 	},
// ];

// const list2 = [
// 	{
// 		firstName: 'Mariami',
// 		lastName: 'G.',
// 		country: 'Georgia',
// 		continent: 'Europe',
// 		age: 29,
// 		language: 'Python',
// 	},
// 	{
// 		firstName: 'Mia',
// 		lastName: 'H.',
// 		country: 'Germany',
// 		continent: 'Europe',
// 		age: 39,
// 		language: 'Ruby',
// 	},
// 	{
// 		firstName: 'Maria',
// 		lastName: 'I.',
// 		country: 'Greece',
// 		continent: 'Europe',
// 		age: 32,
// 		language: 'C',
// 	},
// ];

// function isSameLanguage(list) {
// 	const language = list[0].language;
// 	return list.every((employee) => language === employee.language);
// }

// console.log(isSameLanguage(list2));

// const closestMultiple10 = (num) => Math.round(num / 10) * 10;

// function paintLetterboxes(start, end) {
// 	const allNumbers = [...Array(end + 1).keys()].slice(start);

// 	const splitIntoDigits = allNumbers.map((num) => String(num).split(''));

// 	const allDigits = splitIntoDigits.flat();

// 	const startObject = [...Array(10).keys()].reduce(
// 		(acc, cur) => ({ ...acc, [cur]: 0 }),
// 		{}
// 	);

// 	const counted = allDigits.reduce(
// 		(acc, cur) => ({ ...acc, [cur]: acc[cur] + 1 }),
// 		startObject
// 	);

// 	const result = Object.entries(counted).reduce(
// 		(acc, cur) => [...acc, cur[1]],
// 		[]
// 	);

// 	return result;
// }

// console.log(paintLetterboxes(125, 132));

// const check = (str) => (/^[a-z]+$/gi.test(str || '') ? str : '');
// const calc = (s) =>
// 	[...s.toUpperCase()].reduce((acc, symbol) => acc + symbol.charCodeAt(), 0);
// const compare = (s1, s2) => calc(check(s1)) === calc(check(s2));

// console.log(compare('AD', 'BC'));
// console.log(compare('gf', 'FG'));
// console.log(compare('AD', 'DD'));
// console.log(compare('zz1', ''));

// const vowel2index = (str) => str.replace(/[aeiou]/gi, (m, i) => i + 1);

// console.log(vowel2index('this is my string'));

// const modifiedSum = (a, n) => a.reduce((acc, el) => acc + el ** n - el, 0);

// console.log(modifiedSum([1, 2, 3], 3));
// console.log(modifiedSum([1, 2], 5));

// const minimumSteps = (numbers, value) =>
// 	numbers
// 		.sort((a, b) => a - b)
// 		.reduce(
// 			(acc, el, index) => {
// 				if (acc.sum < value) {
// 					acc.sum += el;
// 					acc.count = index;
// 				}
// 				return acc;
// 			},
// 			{ sum: 0, count: 0 }
// 		).count;

// console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464));
// console.log(minimumSteps([8, 9, 10, 4, 2], 23));
// console.log(minimumSteps([10, 9, 9, 8], 17));
// console.log(minimumSteps([4, 6, 3], 7));

// function meeting(x) {
// 	const index = x.findIndex((el) => el === 'O');
// 	return index > -1 ? index : 'None available!';
// }

// console.log(meeting(['X', 'O', 'X']));
// console.log(meeting(['X', 'X', 'X', 'X', 'X']));

// const maxGap = (numbers) =>
// 	numbers
// 		.sort((a, b) => a - b)
// 		.reduce((acc, el, index, arr) => {
// 			const number = Math.abs(el - arr[index + 1]);
// 			if (number > acc) {
// 				acc = number;
// 			}
// 			return acc;
// 		}, 0);

// console.log(maxGap([13, 10, 2, 9, 5]));
// console.log(maxGap([24, 299, 131, 14, 26, 25]));

// function sortMyString(str) {
// 	const arrStr = [...str];
// 	const even = arrStr.filter((_, i) => i % 2 === 0).join('');
// 	const odd = arrStr.filter((_, i) => i % 2 !== 0).join('');
// 	return even + ' ' + odd;
// }

// console.log(sortMyString('CodeWars'));

// const squaresNeeded = (grains) => Math.ceil(Math.log2(grains + 1));

// const lastSurvivor = (letters, coords) =>
// 	coords.reduce(
// 		(acc, coord) => acc.slice(0, coord) + acc.slice(coord + 1),
// 		letters
// 	);

// const countChar = (string, char) =>
// 	[...string].reduce((acc, el) => {
// 		if (el.toLowerCase() === char.toLowerCase()) {
// 			++acc;
// 		}
// 		return acc;
// 	}, 0);

// const countChar2 = (str, count) => str.match(new RegExp(count, 'gi')).length;

// console.log(countChar('Fancy fifth fly aloof', 'f'));
// console.log(countChar2('Fancy fifth fly aloof', 'f'));
//

// const evensAndOdds = (num) => (num % 2 ? num.toString(16) : num.toString(2));

// console.log(evensAndOdds(2));

// const isNarcissistic = (n) =>
// 	[...String(n)].reduce((acc, el, _, arr) => {
// 		acc += el ** arr.length;
// 		return acc;
// 	}, 0) === n;

// console.log(isNarcissistic(1634));
// console.log(isNarcissistic(8208));

// const swap = (str) =>
// 	[...str]
// 		.map((el) =>
// 			el.toUpperCase() === el ? el.toLowerCase() : el.toUpperCase()
// 		)
// 		.join('');

// console.log(swap('CodeWars'));

// class Block {
// 	constructor([width, length, height]) {
// 		this.width = width;
// 		this.length = length;
// 		this.height = height;
// 	}
// 	getWidth() {
// 		return this.width;
// 	}
// 	getLength() {
// 		return this.length;
// 	}
// 	getHeight() {
// 		return this.height;
// 	}
// 	getVolume() {
// 		return this.width * this.length * this.height;
// 	}
// 	getSurfaceArea() {
// 		return (
// 			2 *
// 			(this.width * this.height +
// 				this.width * this.length +
// 				this.height * this.length)
// 		);
// 	}
// }

// const reverseBits = (n) =>
// 	parseInt([...String(n.toString(2))].reverse().join(''), 2);

// console.log(reverseBits(417));

// const list1 = [
// 	{
// 		firstName: 'Maria',
// 		lastName: 'Y.',
// 		country: 'Cyprus',
// 		continent: 'Europe',
// 		age: 30,
// 		language: 'Java',
// 	},
// 	{
// 		firstName: 'Victoria',
// 		lastName: 'T.',
// 		country: 'Puerto Rico',
// 		continent: 'Americas',
// 		age: 70,
// 		language: 'Python',
// 	},
// ];
// const list2 = [
// 	{
// 		firstName: 'Noa',
// 		lastName: 'A.',
// 		country: 'Israel',
// 		continent: 'Asia',
// 		age: 20,
// 		language: 'Ruby',
// 	},
// 	{
// 		firstName: 'Andrei',
// 		lastName: 'E.',
// 		country: 'Romania',
// 		continent: 'Europe',
// 		age: 21,
// 		language: 'C',
// 	},
// ];

// const list3 = [
// 	{
// 		firstName: 'Emily',
// 		lastName: 'A.',
// 		country: 'Northern Ireland',
// 		continent: 'Europe',
// 		age: 32,
// 		language: 'JavaScript',
// 	},
// 	{
// 		firstName: 'Nor',
// 		lastName: 'E.',
// 		country: 'Malaysia',
// 		continent: 'Asia',
// 		age: 21,
// 		language: 'Clojure',
// 	},
// 	{
// 		firstName: 'Maia',
// 		lastName: 'S.',
// 		country: 'Tahiti',
// 		continent: 'Oceania',
// 		age: 28,
// 		language: 'Clojure',
// 	},
// 	{
// 		firstName: 'Mohammad',
// 		lastName: 'N.',
// 		country: 'United Arab Emirates',
// 		continent: 'Asia',
// 		age: 39,
// 		language: 'C',
// 	},
// 	{
// 		firstName: 'Odval',
// 		lastName: 'F.',
// 		country: 'Mongolia',
// 		continent: 'Asia',
// 		age: 38,
// 		language: 'Python',
// 	},
// 	{
// 		firstName: 'Laia',
// 		lastName: 'P.',
// 		country: 'Andorra',
// 		continent: 'Europe',
// 		age: 55,
// 		language: 'Ruby',
// 	},
// 	{
// 		firstName: 'Sofia',
// 		lastName: 'P.',
// 		country: 'Italy',
// 		continent: 'Europe',
// 		age: 71,
// 		language: 'Clojure',
// 	},
// 	{
// 		firstName: 'Nikau',
// 		lastName: 'R.',
// 		country: 'New Zealand',
// 		continent: 'Oceania',
// 		age: 39,
// 		language: 'Ruby',
// 	},
// 	{
// 		firstName: 'Yerasyl',
// 		lastName: 'D.',
// 		country: 'Kazakhstan',
// 		continent: 'Asia',
// 		age: 22,
// 		language: 'Ruby',
// 	},
// 	{
// 		firstName: 'Margret',
// 		lastName: 'M.',
// 		country: 'Iceland',
// 		continent: 'Europe',
// 		age: 28,
// 		language: 'Java',
// 	},
// ];

// const getAverageAge = (list) =>
// 	Math.round(list.reduce((sum, obj) => sum + obj.age, 0) / list.length);

// console.log(getAverageAge(list1));
// console.log(getAverageAge(list2));
// console.log(getAverageAge(list3));

// function boredom(staff) {
// 	const score = {
// 		accounts: 1,
// 		finance: 2,
// 		canteen: 10,
// 		regulation: 3,
// 		trading: 6,
// 		change: 6,
// 		IS: 8,
// 		retail: 5,
// 		cleaning: 4,
// 		'pissing about': 25,
// 	};

// 	const result = Object.values(staff).reduce(
// 		(acc, currentScore) => acc + score[currentScore],
// 		0
// 	);

// 	if (result <= 80) {
// 		return 'kill me now';
// 	}

// 	if (result < 100) {
// 		return 'i can handle this';
// 	}

// 	return 'party time!!';
// }

// console.log(
// 	boredom({
// 		tim: 'change',
// 		jim: 'accounts',
// 		randy: 'canteen',
// 		sandy: 'change',
// 		andy: 'change',
// 		katie: 'IS',
// 		laura: 'change',
// 		saajid: 'IS',
// 		alex: 'trading',
// 		john: 'accounts',
// 		mr: 'finance',
// 	})
// );

// console.log(
// 	boredom({
// 		tim: 'IS',
// 		jim: 'finance',
// 		randy: 'pissing about',
// 		sandy: 'cleaning',
// 		andy: 'cleaning',
// 		katie: 'cleaning',
// 		laura: 'pissing about',
// 		saajid: 'regulation',
// 		alex: 'regulation',
// 		john: 'accounts',
// 		mr: 'canteen',
// 	})
// );

// console.log(
// 	boredom({
// 		tim: 'accounts',
// 		jim: 'accounts',
// 		randy: 'pissing about',
// 		sandy: 'finance',
// 		andy: 'change',
// 		katie: 'IS',
// 		laura: 'IS',
// 		saajid: 'canteen',
// 		alex: 'pissing about',
// 		john: 'retail',
// 		mr: 'pissing about',
// 	})
// );

// const crap = (x, bags, cap) =>
// 	x.flat(1).includes('D')
// 		? 'Dog!!'
// 		: bags * cap - x.flat(1).filter((el) => el === '@').length > 0
// 		? 'Clean'
// 		: 'Cr@p';

// console.log(
// 	crap(
// 		[
// 			['_', '_', '_', '_'],
// 			['_', '_', '_', '@'],
// 			['_', '_', '@', '_'],
// 		],
// 		2,
// 		2
// 	)
// );

// console.log(
// 	crap(
// 		[
// 			['_', '_', '_', '_'],
// 			['_', '_', '_', '@'],
// 			['_', '_', '@', '_'],
// 		],
// 		1,
// 		1
// 	)
// );

// console.log(
// 	crap(
// 		[
// 			['_', '_'],
// 			['_', '@'],
// 			['D', '_'],
// 		],
// 		2,
// 		2
// 	)
// );

// const findMissingNumber = (sequence) => {
// 	if (!sequence.length) {
// 		return 0;
// 	}

// 	const arr = sequence
// 		.split(' ')
// 		.sort((a, b) => a - b)
// 		.map(Number);

// 	if (!arr.every((el) => !isNaN(el))) {
// 		return 1;
// 	}

// 	return arr.reduce((acc, el, index) => {
// 		if (el != index + 1 && !acc) {
// 			return (acc += index + 1);
// 		}
// 		return acc;
// 	}, 0);
// };

// console.log(findMissingNumber('2 6 4 5 3'));
// console.log(findMissingNumber('1 2 3 5'));
// console.log(findMissingNumber('2 6 1 5 3'));
// console.log(findMissingNumber('1 3'));
// console.log(findMissingNumber('1 5'));
// console.log(findMissingNumber('2 1 4 3 a'));

// const getIssuer = (number) => {
// 	const str = String(number);

// 	if (/^3[4|7]\d{13}$/.test(str)) {
// 		return 'AMEX';
// 	}

// 	if (/^6011\d{12}$/.test(str)) {
// 		return 'Discover';
// 	}

// 	if (/^5[1-5]\d{14}$/.test(str)) {
// 		return 'Mastercard';
// 	}

// 	if (/^4(\d{12}|\d{15})$/.test(str)) {
// 		return 'VISA';
// 	}

// 	return 'Unknown';
// };

// console.log(getIssuer(4111111111111111));
// console.log(getIssuer(378282246310005));
// console.log(getIssuer(9111111111111111));

// const productArray = (numbers) =>
// 	numbers.map((el) => numbers.reduce((a, b) => a * b) / el);

// console.log(productArray([16, 17, 4, 3, 5, 2]));

// function newAvg(arr, newavg) {
// 	const navg = newavg * (arr.length + 1) - arr.reduce((acc, el) => acc + el, 0);
// 	if (navg <= 0) {
// 		throw 'ValueError';
// 	}
// 	return Math.ceil(navg);
// }

// console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90));

// const circleOfNumbers = (n, firstNumber) =>(firstNumber + n/2) % n

// const getStrings = (city) =>
// 	[...city.toLowerCase()].reduce((acc, el, index, arr) => {
// 		if (/[a-z]/i.test(el)) {
// 			acc[el] = ++acc[el] || 1;
// 		}
// 		return arr.length - 1 === index
// 			? Object.entries(acc)
// 					.map((el) => [el[0], '*'.repeat(el[1])].join(':'))
// 					.join(',')
// 			: acc;
// 	}, {});

// console.log(getStrings('Chicagoc'));
// console.log(getStrings('Las Vegas'));

// const save = (sizes, hd) => {
// 	if (!sizes.length) {
// 		return 0;
// 	}

// 	return sizes.reduce(
// 		(acc, el, index) => {
// 			if ((acc.sum += el) <= hd) {
// 				acc.count += 1;
// 			}
// 			return sizes.length - 1 === index ? acc.count : acc;
// 		},
// 		{ sum: 0, count: 0 }
// 	);
// };

// console.log(save([4, 4, 4, 1, 1], 11)); // 2
// console.log(save([4, 8, 15, 16, 23, 42], 108)); // 6
// console.log([], 69);

// const tripleX = (str) => /^[^x]*xxx/.test(str);

// const tripleX = (str) =>
// 	[...str].reduce(
// 		(acc, el, index, arr) => {
// 			if (el === 'x' && !acc.stop) {
// 				acc.stop = true;
// 				if (arr[index + 1] === 'x' && arr[index + 2] === 'x') {
// 					acc.result = true;
// 				}
// 			}

// 			return arr.length - 1 === index ? acc.result : acc;
// 		},
// 		{ result: false, stop: false }
// 	);

// console.log(tripleX('abraxxxas'));
// console.log(tripleX('softx kitty, warm kitty, xxxxx'));
// console.log(tripleX('kittyxxwarm'));

// const tripleX = (str) =>
// 	str.indexOf('x') === str.indexOf('xxx') && str.includes('x');

// const product = s =>
//   s.replace(/[^?]/g, '').length * s.replace(/[^!]/g, '').length;

// const product = (string) =>
// 	[...string].reduce(
// 		(acc, el, index, arr) => {
// 			if (el === '!' || el === '?') {
// 				acc[el] += 1;
// 			}
// 			return arr.length - 1 === index ? acc['!'] * acc['?'] : acc;
// 		},
// 		string.length !== 0 ? { '!': 0, '?': 0 } : 0
// 	);

// console.log(product('!????!!!?'));
// console.log(product(''));

// function findSum(...args) {
// 	if (args.map((el) => el < 0).includes(true)) {
// 		return -1;
// 	}
// 	return args.reduce((acc, el) => acc + el, 0);
// }

// console.log(findSum());
// console.log(findSum([1, 2]));

// const arrCoca = [
// 	{ brand: 'nePepsi' },
// 	{ brand: 'Pepsi' },
// 	{ brand: 'nePepsi' },
// 	{ brand: 'Pepsi' },
// ];
// const brands = arrCoca.map((el) => el.brand);
// console.log(arrCoca.filter((_, index) => brands.indexOf('Pepsi') !== index));

// const solution = (value) => `Value is ${String(value).padStart(5, '0')}`;

// console.log(solution(5));

// const twoOldestAges = (ages) =>
// 	ages
// 		.sort((a, b) => b - a)
// 		.slice(0, 2)
// 		.reverse();

// const tidyNumber = (num) =>
// 	[...String(num)]
// 		.map(Number)
// 		.every((el, index, arr) =>
// 			el <= arr[index + 1] ? true : arr[index + 1] === undefined ? true : false
// 		);

// function stringMerge(string1, string2, letter) {
// 	const wordOne = string1.slice(0, string1.indexOf(letter));
// 	const wordTwo = string2.slice(string2.indexOf(letter));
// 	return wordOne + wordTwo;
// }

// console.log(stringMerge('abcdefxxxyzz', 'abcxxxyyyxyzz', 'x'));
// console.log(stringMerge('apowiejfoiajsf', 'iwahfeijouh', 'j'));

// const bingo = (a) =>
// 	[2, 7, 9, 14, 15].every((el) => a.includes(el)) ? 'WIN' : 'LOSE';

// console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // LOSE
// console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10])); // WIN
// console.log(bingo([23, 25, 9, 15, 4, 9, 13, 2, 6, 15])); // LOSE

// const findAll = (array, n) =>
// 	array.reduce((acc, el, index) => {
// 		if (el === n) {
// 			acc = acc.concat(index);
// 		}
// 		return acc;
// 	}, []);

// const consecutive = (arr, a, b) =>
// 	arr.some(
// 		(el, index, arr) =>
// 			(el === a && arr[index + 1] === b) || (el === b && arr[index + 1] === a)
// 	);

// console.log(consecutive([1, 3, 5, 7], 3, 7)); // false
// console.log(consecutive([1, 3, 5, 7], 3, 1)); // true

// Array.prototype.remove_ = function (integer_list, values_list) {
// 	return integer_list.filter((el) => !values_list.includes(el));
// };

// l = new Array();
// console.log(l.remove_([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]));

// const duplicates = (array) =>
// 	[...array].sort().reduce((acc, el, index, array) => {
// 		if (el === array[index + 1]) {
// 			++acc;
// 			array[index + 1] = null;
// 		}
// 		return acc;
// 	}, 0);

// console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]));
// console.log(duplicates([0, 0, 0, 0, 0, 0, 0]));
// console.log(duplicates([1000, 1000]));

// const solve = (a, b) =>
// 	b.reduce((acc, el) => {
// 		const count = a.filter((str) => el === str).length;
// 		acc = acc.concat(count);
// 		return acc;
// 	}, []);

// console.log(solve(['abc', 'abc', 'xyz', 'abcd', 'cde'], ['abc', 'cde', 'uap']));

// const filterLongWords = (sentence, n) =>
// 	sentence.split(' ').filter((el) => el.length > n);

// console.log(filterLongWords('The quick brown fox jumps over the lazy dog', 4));
// // ['quick', 'brown', 'jumps']

// const makeBackronym = (string) =>
// 	string
// 		.split('')
// 		.map((el) => dict[el.toUpperCase()])
// 		.join(' ');

// console.log(makeBackronym('dgm'));

// const evenLast = (numbers) =>
// 	numbers.reduce(
// 		(acc, el, index, arr) =>
// 			index % 2 === 0 ? acc + el * arr[arr.length - 1] : acc,
// 		0
// 	);

// console.log(evenLast([2, 3, 4, 5]));

// const twoSum = (numbers, target) =>
// 	numbers
// 		.map((value, index, arr) => [index, arr.indexOf(target - value, index + 1)])
// 		.filter((item) => item[1] > -1)[0];

// console.log(twoSum([3, 2, 3], 6));
// console.log(twoSum([3, 2, 4], 6));

// const addTwoNumbers = (l1, l2) =>
// 	[
// 		...String(Number(l1.reverse().join('')) + Number(l2.reverse().join(''))),
// 	].reverse();

// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])); // [7,0,8]

// const isNice = (arr) =>
// 	arr.length !== 0 &&
// 	arr.every((el) => arr.includes(el + 1) || arr.includes(el - 1));

// console.log(isNice([2, 10, 9, 3]));
// console.log(isNice([3, 4, 5, 7]));
// console.log(isNice([-2, 5, 0, 5, 12]));

// const longest = (words) =>
// 	words.reduce((a, word) => Math.max(a, word.length), 0);

// function nextHappyYear(year) {
// 	let result = 0;
// 	for (let i = year + 1; ; i++) {
// 		if ([...new Set(('' + i).split(''))].length === 4) {
// 			result = i;
// 			break;
// 		}
// 	}
// 	return result;
// }

// console.log(nextHappyYear(1001));

// function bandNameGenerator(str) {
// 	const isSame = str[0] === str[str.length - 1];
// 	const upSlice = str[0].toUpperCase() + str.slice(1);
// 	return isSame ? upSlice + str.slice(1) : 'The ' + upSlice;
// }

// console.log(bandNameGenerator('knife'));

// const swap = (string) =>
// 	[...string]
// 		.map((el) => (/[aeiouy]/.test(el) ? el.toUpperCase() : el))
// 		.join('');

// const swap = (string) => string.replace(/[aeiou]/g, (el) => el.toUpperCase());

// console.log(swap('Hello World!'));

// const elevatorDistance = (array) =>
// 	array.reduce(
// 		(acc, el, index, array) => (acc += Math.abs(el - array[index + 1] || 0)),
// 		0
// 	);

// console.log(elevatorDistance([5, 2, 8]));

// const baggage = [
// 	{ ticket: 1, baggage: ['a'] },
// 	{ ticket: 2, baggage: ['b'] },
// 	{ ticket: 3, baggage: ['c'] },
// ];

// const passenger = [
// 	{ name: 'Vasya', ticket: 1, baggage: [] },
// 	{ name: 'Anya', ticket: 2, baggage: [] },
// 	{ name: 'Valera', ticket: 3, baggage: [] },
// ];

// console.log(
// 	passenger.map((passenger) => ({
// 		...passenger,
// 		baggage: baggage.find((el) => el.ticket === passenger.ticket).baggage,
// 	}))
// );

// const covfefe = (str) =>
// 	str.includes('coverage')
// 		? str.replace(/(coverage)/g, 'covfefe')
// 		: str + ' covfefe';

// console.log(
// 	covfefe(
// 		'1xhd 1gap 1yv8coveragefxgj e9hh9coverage6w032 klobcoverage68mlf rtss'
// 	)
// );

// const isNonDecreasingOrder = (number) =>
// 	String(number)
// 		.split('')
// 		.every((el, index, arr) =>
// 			arr.length - 1 === index ? true : el <= arr[index + 1]
// 		);

// function sumDigits(number) {
// 	let result = 0;
// 	let digit;

// 	while (number) {
// 		digit = number % 10;
// 		result += digit;
// 		number = (number - digit) / 10;
// 	}

// 	return result;
// }

// const findAll = (n, k) => {
// 	const maxNumber = Number('9'.repeat(k)) + 1;
// 	let results = [];
// 	let count = Number('1' + '0'.repeat(k - 1));

// 	while (count < maxNumber) {
// 		if (sumDigits(count) === n && isNonDecreasingOrder(count)) {
// 			results.push(count);
// 		}
// 		++count;
// 	}

// 	if (results.length === 0) {
// 		return [0];
// 	}

// 	return [results.length, results[0], results[results.length - 1]];
// };

// console.log(findAll(10, 3)); // [8, 118, 334]
// console.log(findAll(27, 3)); // [1, 999, 999]
// console.log(findAll(28, 3)); // [0]
// console.log(findAll(10, 8));

// const winnerList1 = [
// 	{ season: '1996–97', team: 'Borussia Dortmund', country: 'Germany' },
// 	{ season: '1997–98', team: 'Real Madrid', country: 'Spain' },
// 	{ season: '1998–99', team: 'Manchester United', country: 'England' },
// 	{ season: '1999–00', team: 'Real Madrid', country: 'Spain' },
// 	{ season: '2000–01', team: 'Bayern Munich', country: 'Germany' },
// 	{ season: '2001–02', team: 'Real Madrid', country: 'Spain' },
// 	{ season: '2002–03', team: 'Milan', country: 'Italy' },
// 	{ season: '2003–04', team: 'Porto', country: 'Portugal' },
// 	{ season: '2004–05', team: 'Liverpool', country: 'England' },
// 	{ season: '2005–06', team: 'Barcelona', country: 'Spain' },
// 	{ season: '2006–07', team: 'Milan', country: 'Italy' },
// 	{ season: '2007–08', team: 'Manchester United', country: 'England' },
// 	{ season: '2008–09', team: 'Barcelona', country: 'Spain' },
// 	{ season: '2009–10', team: 'Internazionale', country: 'Italy' },
// 	{ season: '2010–11', team: 'Barcelona', country: 'Spain' },
// 	{ season: '2011–12', team: 'Chelsea', country: 'England' },
// 	{ season: '2012–13', team: 'Bayern', country: 'Germany' },
// 	{ season: '2013–14', team: 'Real Madrid', country: 'Spain' },
// 	{ season: '2014–15', team: 'Barcelona', country: 'Spain' },
// 	{ season: '2015–16', team: 'Real Madrid', country: 'Spain' },
// ];

// const countWins = (winnerList, country) =>
// 	winnerList.filter((el) => el.country === country).length;

// console.log(countWins(winnerList1, 'Portugal'));

// const arr1 = [
// 	9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18,
// 	71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84,
// 	94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46,
// 	19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58,
// 	55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99,
// 	16,
// ]; // 26
// const arr2 = [
// 	26, 0, 75, 87, 33, 52, 37, 59, 27, 4, 54, 15, 24, 7, 21, 82, 98, 79, 34, 25,
// 	1, 99, 5, 10, 96, 97, 65, 85, 47, 28, 81, 70, 74, 11, 38, 45, 84, 13, 41, 2,
// 	86, 39, 29, 43, 19, 31, 18, 58, 14, 77, 69, 32, 6, 66, 61, 62, 50, 53, 8, 80,
// 	72, 9, 68, 35, 42, 73, 83, 71, 92, 95, 63, 51, 16, 17, 64, 22, 44, 91, 30, 76,
// 	12, 3, 46, 60, 36, 56, 88, 89, 100, 78, 90, 49, 55, 48, 23, 93, 57, 67, 20,
// 	94,
// ]; // 40
// const arr3 = [
// 	15, 60, 61, 95, 46, 38, 68, 11, 47, 45, 27, 23, 3, 16, 8, 81, 76, 63, 62, 57,
// 	59, 22, 55, 78, 28, 54, 74, 39, 79, 65, 48, 82, 17, 2, 98, 90, 18, 9, 56, 34,
// 	7, 75, 10, 93, 35, 5, 73, 77, 85, 71, 13, 91, 83, 70, 89, 4, 84, 14, 52, 99,
// 	53, 33, 49, 42, 40, 58, 30, 36, 67, 72, 41, 26, 87, 97, 25, 29, 50, 64, 21,
// 	88, 66, 24, 94, 51, 1, 100, 0, 96, 69, 12, 92, 31, 37, 6, 86, 32, 19, 44, 20,
// 	43,
// ]; // 80
// const missingNo = (nums) => nums.reduce((acc, el) => acc - el, 5050);

// console.log(missingNo(arr1), 26);
// console.log(missingNo(arr2), 40);
// console.log(missingNo(arr3), 80);

// // Арифметическая прогрессия
// const arithmeticSequenceElements = (start, difference, length) =>
// 	[...Array(length)].map((_, index) => start + difference * index).join(', ');

// console.log(arithmeticSequenceElements(1, 2, 5), '1, 3, 5, 7, 9');
// console.log(arithmeticSequenceElements(1, 0, 5), '1, 1, 1, 1, 1');
// console.log(
// 	arithmeticSequenceElements(1, -3, 10),
// 	'1, -2, -5, -8, -11, -14, -17, -20, -23, -26'
// );
// console.log(
// 	arithmeticSequenceElements(100, -10, 10),
// 	'100, 90, 80, 70, 60, 50, 40, 30, 20, 10'
// );

// const head = (arr) => arr[0];
// const tail = (arr) => arr.slice(1);
// const init = (arr) => arr.slice(0, -1);
// const last = (arr) => arr[arr.length - 1];

// console.log(head([5, 1]), 5);
// console.log(tail([1]), []);
// console.log(init([1, 5, 7, 9]), [1, 5, 7]);
// console.log(last([7, 2]), 2);

// const twoDecimalPlaces = (number) => Number(String(number).match(/.*\.\d\d/));

// console.log(twoDecimalPlaces(-7488.83585834983));
// console.log(twoDecimalPlaces(10.1289767789));

// let questions = [
// 	{
// 		question: "What's the currency of the USA?",
// 		choices: ['US dollar', 'Ruble', 'Horses', 'Gold'],
// 		corAnswer: 0,
// 	},
// 	{
// 		question: 'Where was the American Declaration of Independence signed?',
// 		choices: ['Philadelphia', 'At the bottom', "Frankie's Pub", 'China'],
// 		corAnswer: 0,
// 	},
// ];
// questions = questions.map((el) => ({ ...el, usersAnswer: null }));

// console.log(questions[0]);

// function findScreenHeight(w, h) {
// 	const [horizontal, vertical] = h.split(':');
// 	return `${w}x${w * (vertical / horizontal)}`;
// }

// console.log(findScreenHeight(1024, '4:3'));

// const one = (arr, fun) => arr.filter(fun).length === 1;

// console.log(
// 	one([1, 2, 3, 4, 5], function (item) {
// 		return item < 2;
// 	})
// );
// console.log(
// 	one([1, 2, 3, 4, 5], function (item) {
// 		return item % 2;
// 	})
// );
// console.log(
// 	one([1, 2, 3, 4, 5], function (item) {
// 		return item > 5;
// 	})
// );

// const check = (obj) => {
// 	const message =
// 		obj.even > obj.odd
// 			? 'Even is greater than Odd'
// 			: 'Odd is greater than Even';
// 	return obj.even === obj.odd ? 'Even and Odd are the same' : message;
// };
// const evenOrOdd = (str) =>
// 	[...str].reduce(
// 		(acc, el, index, arr) => {
// 			el % 2 === 0 ? (acc.even += Number(el)) : (acc.odd += Number(el));
// 			return arr.length - 1 === index ? check(acc) : acc;
// 		},
// 		{ even: 0, odd: 0 }
// 	);

// console.log(evenOrOdd('12'));
// console.log(evenOrOdd('112'));

// const getMissingElement = (superImportantArray) =>
// 	[...Array(10).keys()].find(
// 		(_, index) => !superImportantArray.includes(index)
// 	);

// console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]));
// console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1]));
// console.log(getMissingElement([6, 1, 2, 4, 3, 5, 7, 8, 9]));

// class Person {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	greet(name) {
// 		return 'Hello ' + name + ', my name is ' + this.name;
// 	}
// }

// var joe = new Person('Joe');
// console.log(joe.greet('Kate')); // should return 'Hello Kate, my name is Joe'
// joe.name;

// const solution = (pairs) =>
// 	Object.entries(pairs)
// 		.map((el) => el.join(' = '))
// 		.join(',');

// console.log(solution({ a: 1, b: '2' })); // a = 1,b = 2

// const fireFight = (s) => s.replace(/Fire/g, '~~');

// console.log(fireFight('Mast Deck Engine Water Fire'));

// const arr = [
// 	{ Бяк: 1 },
// 	{ Аякса: 2 },
// 	{ бал: 3 },
// 	{ Аякса: 3 },
// 	{ абажур: 4 },
// 	{ Аякса: 1 },
// ];

// console.log(
// 	arr.sort((a, b) => {
// 		const word1 = Object.keys(a)[0].toLowerCase();
// 		const word2 = Object.keys(b)[0].toLowerCase();
// 		if (word1 === word2) {
// 			return Object.values(a) - Object.values(b);
// 		}
// 		return word1.localeCompare(word2);
// 	})
// );

// const stantonMeasure = (arr) => {
// 	const number = arr.filter((el) => el === 1).length;
// 	return arr.filter((el) => el === number).length;
// };
// console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]));
// console.log(stantonMeasure([1, 4, 1, 2, 11, 2, 3, 1]));

// const flatten = (array) => array.reduce((acc, el) => acc.concat(el), []);

// console.log(
// 	flatten([
// 		[1, 2, 3],
// 		['a', 'b', 'c'],
// 		[1, 2, 3],
// 	])
// );

// const extraPerfect = (n) =>
// 	[...Array(Math.round(n / 2))].reduce(
// 		(acc) => {
// 			const lastNumber = acc[acc.length - 1];
// 			if (lastNumber + 2 <= n) {
// 				acc = acc.concat(lastNumber + 2);
// 			}
// 			return acc;
// 		},
// 		[1]
// 	);

// console.log(extraPerfect(3));
// console.log(extraPerfect(28));

// const arr = [0, 1, 2, 2, 3];

// Array.prototype.numberOfOccurrences = function (number) {
// 	return this.filter(el => el === number).length;
// };

// console.log(arr.numberOfOccurrences(0));
// console.log(arr.numberOfOccurrences(4));
// console.log(arr.numberOfOccurrences(2));
// console.log(arr.numberOfOccurrences('a'));

// const replaceNth = (text, n, oldValue, newValue, count = 0) =>
// 	n > 0
// 		? text.replace(new RegExp(oldValue, 'g'), (symbol) =>
// 				++count % n === 0 ? newValue : symbol
// 		  )
// 		: text;

// console.log(replaceNth('Vader said: No, I am your father!', 2, 'a', 'o')); // "Vader soid: No, I am your fother!"

// const solve = (arr) =>
// 	[...Array(arr.sort((a, b) => a - b).length)].map((_, index) =>
// 		index % 2 ? arr.shift() : arr.pop()
// 	);

// console.log(solve([15, 11, 10, 7, 12]));

// const arr = [
// 	{
// 		firstName: 'Harry',
// 		lastName: 'K.',
// 		country: 'Brazil',
// 		continent: 'Americas',
// 		age: 22,
// 		language: 'JavaScript',
// 		githubAdmin: 'yes',
// 	},
// 	{
// 		firstName: 'Kseniya',
// 		lastName: 'T.',
// 		country: 'Belarus',
// 		continent: 'Europe',
// 		age: 49,
// 		language: 'Ruby',
// 		githubAdmin: 'no',
// 	},
// 	{
// 		firstName: 'Jing',
// 		lastName: 'X.',
// 		country: 'China',
// 		continent: 'Asia',
// 		age: 34,
// 		language: 'JavaScript',
// 		githubAdmin: 'yes',
// 	},
// 	{
// 		firstName: 'Piotr',
// 		lastName: 'B.',
// 		country: 'Poland',
// 		continent: 'Europe',
// 		age: 128,
// 		language: 'JavaScript',
// 		githubAdmin: 'no',
// 	},
// ];

// const findAdmin = (list, lang) =>
// 	list.filter(
// 		({ language, githubAdmin }) => language === lang && githubAdmin === `yes`
// 	);

// console.log(findAdmin(arr, 'JavaScript'));

// const getNames = (data) => data.map((item) => item.name);

// function numbersWithDigitInside(x, d) {
// 	const arr = [...Array(x)].reduce(
// 		(acc, _, index) =>
// 			new RegExp(d).test(String(index + 1))
// 				? (acc = acc.concat(index + 1))
// 				: acc,
// 		[]
// 	);

// 	return [
// 		arr.length,
// 		arr.reduce((acc, el) => acc + el, 0),
// 		arr.length ? arr.reduce((acc, el) => acc * el, 1) : 0,
// 	];
// }

// console.log(numbersWithDigitInside(11, 1));
// console.log(numbersWithDigitInside(1, 0));

// function liftoff(instructions) {
// 	const result = instructions.sort((a, b) => b - a).join(' ');
// 	return `${result} liftoff!`;
// }

// console.log(liftoff([2, 8, 10, 9, 1, 3, 4, 7, 6, 5]));

// const nicknameGenerator = (name) =>
// 	(name.length <= 3 && 'Error: Name too short') ||
// 	(/[aeiou]/.test(name[2]) ? name.slice(0, 4) : name.slice(0, 3));

// console.log(nicknameGenerator('Robert')); //=> "Rob"
// console.log(nicknameGenerator('Kimberly')); //=> "Kim"
// console.log(nicknameGenerator('Samantha')); //=> "Sam"
// console.log(nicknameGenerator('Jeannie')); //=> "Jean"
// console.log(nicknameGenerator('Douglas')); //=> "Doug"
// console.log(nicknameGenerator('Gregory')); //=> "Greg"
// console.log(nicknameGenerator('Sam'));

// const friends = [
// 	{
// 		username: 'David',
// 		status: 'online',
// 		lastActivity: 10,
// 	},
// 	{
// 		username: 'Lucy',
// 		status: 'offline',
// 		lastActivity: 22,
// 	},
// 	{
// 		username: 'Bob',
// 		status: 'online',
// 		lastActivity: 104,
// 	},
// ];

// const friends2 = [
// 	{ username: 'Lucy', status: 'offline', lastActivity: 22 },
// 	{ username: 'Bob', status: 'online', lastActivity: 104 },
// ];

// const whosOnline = (friends) =>
// 	friends.reduce((acc, el) => {
// 		const { status, lastActivity, username } = el;
// 		const { online, offline, away } = acc;
// 		if (status !== 'online') {
// 			offline ? offline.push(username) : (acc.offline = [username]);
// 		} else if (lastActivity > 10) {
// 			away ? away.push(username) : (acc.away = [username]);
// 		} else {
// 			online ? online.push(username) : (acc.online = [username]);
// 		}
// 		return acc;
// 	}, {});

// console.log(whosOnline(friends));
// console.log(whosOnline(friends2));

// const arrowArea = (a, b) => (a * b) / 4;

// console.log(arrowArea(4, 2));
// console.log(arrowArea(7, 6));
// console.log(arrowArea(25, 25));

// var list1 = [
// 	{
// 		firstName: 'Noah',
// 		lastName: 'M.',
// 		country: 'Switzerland',
// 		continent: 'Europe',
// 		age: 19,
// 		language: 'C',
// 		meal: 'vegetarian',
// 	},
// 	{
// 		firstName: 'Anna',
// 		lastName: 'R.',
// 		country: 'Liechtenstein',
// 		continent: 'Europe',
// 		age: 52,
// 		language: 'JavaScript',
// 		meal: 'standard',
// 	},
// 	{
// 		firstName: 'Ramona',
// 		lastName: 'R.',
// 		country: 'Paraguay',
// 		continent: 'Americas',
// 		age: 29,
// 		language: 'Ruby',
// 		meal: 'vegan',
// 	},
// 	{
// 		firstName: 'George',
// 		lastName: 'B.',
// 		country: 'England',
// 		continent: 'Europe',
// 		age: 81,
// 		language: 'C',
// 		meal: 'vegetarian',
// 	},
// ];

// const orderFood = (list) =>
// 	list.reduce((acc, { meal }) => (acc[meal] = ++acc[meal] || 1) && acc, {});

// console.log(orderFood(list1));

// function infected(s) {
// 	const total = s.replace(/X/g, '').length;
// 	const infected = s
// 		.split('X')
// 		.filter((i) => i.includes(1))
// 		.join('').length;
// 	const percentage = (100 * infected) / total;
// 	return percentage || 0;
// }

// console.log(infected('01000000X000X011X0X'));

// const isLucky = (n) =>
// 	[...String(n)].reduce((acc, el) => acc + Number(el), 0) % 9 === 0;

// console.log(isLucky(1892376));
// console.log(isLucky(0));

// function spoonerize(words) {
// 	const [one, two] = words.split(' ');
// 	return `${two[0] + one.slice(1)} ${one[0] + two.slice(1)}`;
// }
// console.log(spoonerize('nit picking'));

// const getAges = (sum, difference) =>
// 	sum < 0 || difference < 0 || sum < difference
// 		? null
// 		: [(sum + difference) / 2, (sum - difference) / 2];

// console.log(getAges(24, 4));

// const getMissingNumbers = (numbers) =>
// 	[...new Set(numbers)]
// 		.sort((a, b) => a - b)
// 		.reduce((acc, el, index, arr) => {
// 			const nextNumber = arr[index + 1];

// 			if (el !== nextNumber && nextNumber !== undefined) {
// 				const numbers = [...Array(nextNumber - el - 1)].map(
// 					(_, index) => index + 1 + el
// 				);
// 				acc.push(...numbers);
// 			}

// 			if (arr.length === 1 && numbers.length === 2) {
// 				acc.push(el + 1);
// 			}

// 			return acc;
// 		}, []);

// console.log(getMissingNumbers([1, 10]));
// console.log(getMissingNumbers([15, 20]));
// console.log(getMissingNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
// console.log(getMissingNumbers([1, 2]));
// console.log(getMissingNumbers([1, 1]));

// const getMissingNumbers = (numbers) =>
// 	[...new Set(numbers)]
// 		.sort((a, b) => a - b)
// 		.reduce((acc, el, index, arr) => {
// 			const nextNumber = arr[index + 1];

// 			if (el !== nextNumber && nextNumber !== undefined) {
// 				const numbers = [...Array(nextNumber - el - 1)].map(
// 					(_, index) => index + 1 + el
// 				);
// 				acc.push(...numbers);
// 			}

// 			if (arr.length === 1 && numbers.length === 2) {
// 				acc.push(el + 1);
// 			}

// 			return acc;
// 		}, []);

// console.log(getMissingNumbers([1, 10]));
// console.log(getMissingNumbers([15, 20]));
// console.log(getMissingNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
// console.log(getMissingNumbers([1, 2]));
// console.log(getMissingNumbers([1, 1]));

// function shorter_reverse_longer(a, b) {
// 	const longer = a.length >= b.length ? a : b;
// 	const shorter = a.length <= b.length ? a : b;

// 	return `${shorter}${[...longer].reverse().join('')}${shorter}`;
// }
// console.log(shorter_reverse_longer('first', 'abcde'));

// const killer = (suspectInfo, dead) =>
// 	Object.entries(suspectInfo).find(
// 		(el) => el[1].filter((el) => dead.includes(el)).length === dead.length
// 	)[0];

// console.log(
// 	killer(
// 		{
// 			James: ['Jacob', 'Bill', 'Lucas'],
// 			Johnny: ['David', 'Kyle', 'Lucas'],
// 			Peter: ['Lucy', 'Kyle'],
// 		},
// 		['Lucas', 'Bill']
// 	)
// );

// const sumOfABeach = (beach) =>
// 	(beach.match(/sand|water|fish|sun/gi) || []).length;

// console.log(sumOfABeach('GolDeNSanDyWateRyBeaChSuNNSuN'));

// class Animal {
// 	constructor(name, age, legs, species, status) {
// 		this.name = name;
// 		this.age = age;
// 		this.legs = legs;
// 		this.species = species;
// 		this.status = status;
// 	}
// 	introduce() {
// 		return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
// 	}
// }

// class Shark extends Animal {
// 	constructor(name, age, status) {
// 		super(name, age, 0, 'shark', status);
// 	}
// }

// class Cat extends Animal {
// 	constructor(name, age, status) {
// 		super(name, age, 4, 'cat', status);
// 	}
// 	introduce() {
// 		return super.introduce() + '  Meow meow!';
// 	}
// }

// class Dog extends Animal {
// 	constructor(name, age, status, master) {
// 		super(name, age, 4, 'dog', status);
// 		this.masterName = master;
// 	}
// 	greetMaster() {
// 		return `Hello ${this.masterName}`;
// 	}
// }

// const billy = new Shark('Billy', 3, 'Alive and well');
// console.log(billy.name, 'Billy');
// console.log(billy.age, 3);
// console.log(billy.legs, 0);
// console.log(billy.species, 'shark');
// console.log(billy.status, 'Alive and well');
// console.log(billy.introduce(), `Hello, my name is Billy and I am 3 years old.`);

// const cathy = new Cat('Cathy', 7, 'Playing with a ball of yarn');
// console.log(cathy.name, 'Cathy');
// console.log(cathy.age, 7);
// console.log(cathy.legs, 4);
// console.log(cathy.species, 'cat');
// console.log(cathy.status, 'Playing with a ball of yarn');
// console.log(
// 	cathy.introduce(),
// 	'Hello, my name is Cathy and I am 7 years old.  Meow meow!'
// );

// const spitsy = new Cat('Spitsy', 6, 'sleeping');
// console.log(spitsy.name, 'Spitsy');
// console.log(spitsy.age, 6);
// console.log(spitsy.legs, 4);
// console.log(spitsy.species, 'cat');
// console.log(spitsy.status, 'sleeping');
// console.log(
// 	spitsy.introduce(),
// 	'Hello, my name is Spitsy and I am 6 years old.  Meow meow!'
// );

// const doug = new Dog('Doug', 12, 'Serving his master', 'Eliza');
// console.log(doug.name, 'Doug');
// console.log(doug.age, 12);
// console.log(doug.legs, 4);
// console.log(doug.species, 'dog');
// console.log(doug.status, 'Serving his master');
// console.log(doug.introduce(), 'Hello, my name is Doug and I am 12 years old.');
// console.log(doug.greetMaster(), 'Hello Eliza');

// function timeCorrect(timestring) {
// 	const date = new Date();

// 	if (timestring == '') {
// 		return timestring;
// 	}

// 	if (!/\d\d:\d\d:\d\d/.test(timestring)) {
// 		return null;
// 	}

// 	date.setUTCHours(...timestring.split(':'));
// 	return date.toLocaleTimeString('en', { hour12: false });
// }

// console.log(timeCorrect('09:10:01'));
// console.log(timeCorrect('11:70:10'));
// console.log(timeCorrect('001122'));
// console.log(timeCorrect(''));
// console.log(timeCorrect(null));

// const createDict = (keys, values) =>
// 	keys.reduce(
// 		(acc, el, index) => (
// 			(acc[el] =
// 				values[index] === null || values[index] === undefined
// 					? null
// 					: values[index]),
// 			acc
// 		),

// 		{}
// 	);

// console.log(createDict(['a', 'b', 'c'], [1, 2, 3]));
// console.log(createDict(['a', 'b', 'c'], [1, 2, 3, 4]));
// console.log(createDict(['a', 'b', 'c', 'd'], [1, 2, 3]));
// console.log(createDict(['a', 'b', 'c', 'd', 'e'], [1, 2, 0, false, '']));

// const change = (str) =>
// 	'abcdefghijklmnopqrstuvwxyz'
// 		.split('')
// 		.map((el) => (str.toLowerCase().includes(el) ? 1 : 0))
// 		.join('');

// console.log(change('a **&  bZ'));
// console.log(change('!!a$%&RgTT')); // '10000010000000000101000000'

// const prevMultOfThree = (n) =>
// 	n % 3 ? prevMultOfThree((n / 10) ^ 0) : n || null;

// function flyBy(lamps, drone) {
// 	if (drone.length > lamps.length) {
// 		return 'o'.repeat(lamps.length);
// 	}
// 	return 'o'.repeat(drone.length) + 'x'.repeat(lamps.length - drone.length);
// }

// console.log(flyBy('xxxxxx', '====T')); // ooooox

// const broken = (x) => x.replace(/./g, (x) => (x === '0' ? '1' : '0'));

// console.log(broken('10000000101101111110011001000'));

// const filterEvenLengthWords = (words) =>
// 	words.filter((el) => el.length % 2 === 0).length;

// console.log(filterEvenLengthWords(['One', 'Two', 'Three', 'Four']));

// function freqSeq(str, sep) {
// 	const count = [...str].reduce(
// 		(acc, el) => (acc[el] = ++acc[el] || 1) && acc,
// 		{}
// 	);
// 	return [...str.replace(/./g, (x) => count[x])].join(sep);
// }

// console.log(freqSeq('hello world', '-'));

// function battle(x, y) {
// 	const oneWordScore = [...x].reduce(
// 		(acc, el) => acc + el.charCodeAt() - 64,
// 		0
// 	);
// 	const twoWordScore = [...y].reduce(
// 		(acc, el) => acc + el.charCodeAt() - 64,
// 		0
// 	);
// 	if (oneWordScore === twoWordScore) {
// 		return 'Tie!';
// 	}
// 	return oneWordScore > twoWordScore ? x : y;
// }

// const gordon = (a) =>
// 	a
// 		.toUpperCase()
// 		.replace(/\w+/g, '$&!!!!')
// 		.replace(/[AEIOU]/g, (v) => (v == 'A' ? '@' : '*'));

// console.log(gordon('What feck damn cake'));
// console.log(gordon('are you stu pid'));
// console.log(gordon('i am a chef'));

// const unusedDigits = (...arg) =>
// 	arg
// 		.reduce(
// 			(acc, el) => acc.filter((number) => ![...String(el)].includes(number)),
// 			['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// 		)
// 		.join('');

// console.log(unusedDigits(12, 34, 56, 78));
// console.log(unusedDigits(2015, 8, 26));

// const catchSignChange = (arr) =>
// 	arr.reduce((acc, el, index, arr) => {
// 		if (el < 0 && arr[index - 1] >= 0) {
// 			acc += 1;
// 		}
// 		if (el >= 0 && arr[index - 1] < 0) {
// 			acc += 1;
// 		}
// 		return acc;
// 	}, 0);

// console.log(catchSignChange([1, -2, -7, -4, 4, -2, 0, -3, 3]));

// const moveTen = (s) =>
// 	[...s.toLowerCase()]
// 		.map((symbol) => {
// 			const code = symbol.charCodeAt();
// 			return String.fromCharCode(
// 				code + 10 <= 122 ? code + 10 : 97 + code + 9 - 122
// 			);
// 		})
// 		.join('');

// console.log(moveTen('testcase'));

// function fusc(n) {
// 	if (n == 0 || n == 1) {
// 		return n;
// 	}

// 	if (n % 2 == 0) {
// 		return fusc(n / 2);
// 	}

// 	return fusc((n - 1) / 2) + fusc((n + 1) / 2);
// }

// console.log(fusc(85));

// const arithmeticSequenceSum = (a, r, n) =>
// 	[...Array(n)].reduce((acc, _, index) => (acc += a + r * index), 0);

// console.log(arithmeticSequenceSum(2, 3, 5));

// const unscrambleEggs = (word) => word.replace(/egg/g, '');

// console.log(unscrambleEggs('ceggodegge heggeregge'));

// function well(x) {
// 	const ideas = x.reduce((acc, el) => {
// 		el.forEach(
// 			(idea) => String(idea).toLowerCase() === 'good' && (acc = acc + 1)
// 		);
// 		return acc;
// 	}, 0);

// 	if (ideas === 0) {
// 		return 'Fail!';
// 	}
// 	return ideas <= 2 ? 'Publish!' : 'I smell a series!';
// }

// console.log(
// 	well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']])
// );
// console.log(
// 	well([
// 		[
// 			['bad', 8, 6],
// 			['bAd', 'six', 'cheat'],
// 			['bAd', 'bAd', 3, 8],
// 		],
// 	])
// );

// const collatz = (n) => (n > 1 ? 1 + collatz(n % 2 ? n * 3 + 1 : n / 2) : 1);

// console.log(collatz(20));

// const solve = (s) =>
// 	[...s]
// 		.sort()
// 		.every((el, index, arr) =>
// 			arr.length - 1 !== index
// 				? el.charCodeAt() + 1 === arr[index + 1].charCodeAt()
// 				: true
// 		);

// console.log(solve('abc'));
// console.log(solve('abd'));
// console.log(solve('dabc'));
// console.log(solve('abbc'));

// const pattern = (n) =>
// 	[...Array(n)].reduce((acc, _, index, arr) => {
// 		acc += `${1}${'*'.repeat(String(index))}${
// 			index + 1 === 1 ? '' : index + 1
// 		}${arr.length - 1 === index ? '' : '\n'}`;
// 		return acc;
// 	}, '');

// console.log(pattern(3));
// console.log(pattern(4));

// const sum = (...args) => args.reduce((acc, el) => acc + el, 0);

// console.log(sum(12, 1, 1, 1, 1, 1, 1));

// const remove = (string) =>
// 	string
// 		.split(' ')
// 		.map((el) => el.replace(/!*$/g, ''))
// 		.join(' ');

// console.log(remove('!!!Hi !!hi!!! !hi'));

// const isDivisible = (n, ...numbers) =>
// 	numbers.every((number) => n % number === 0);

// console.log(isDivisible(3, 3, 4));
// console.log(isDivisible(12, 3, 4));

// function splitTheBill(x) {
// 	const average =
// 		Object.values(x).reduce((a, b) => a + b, 0) / Object.values(x).length;
// 	const values = Object.values(x).map((el) => el - average);
// 	return Object.assign(
// 		...Object.keys(x).map((key, index) => ({
// 			[key]: parseFloat(values[index].toFixed(2)),
// 		}))
// 	);
// }

// console.log(splitTheBill({ A: 20, B: 15, C: 10 }));

// const findDup = (arr) =>
// 	arr.filter((el, index) => arr.indexOf(el) !== index)[0];

// console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6]));

// function spacer(stringLength, textArr) {
// 	const spacesLength = stringLength - textArr.join('').length;
// 	const remains = spacesLength % (textArr.length - 1);
// 	const resultArray = textArr.map((el, index) =>
// 		index < remains ? el + ' ' : el
// 	);
// 	const countRepeat = spacesLength / (textArr.length - 1);
// 	return resultArray.join(' '.repeat(countRepeat > 0 ? countRepeat : 1));
// }

// console.log(spacer(1, ['s', 'e']));
// console.log(spacer(20, ['this', 'is', 'example']));
// console.log(spacer(8, ['123456']));

// const smaller = (nums) =>
// 	nums.map(
// 		(number, index) => nums.slice(index).filter((el) => el < number).length
// 	);

// console.log(smaller([5, 4, 3, 2, 1]));

// const fizzBuzzCuckooClock = (time) =>
// 	(([hour, minute]) =>
// 		!minute
// 			? `Cuckoo `.repeat(hour % 12 || 12).trim()
// 			: !(minute % 30)
// 			? `Cuckoo`
// 			: !(minute % 15)
// 			? `Fizz Buzz`
// 			: !(minute % 5)
// 			? `Buzz`
// 			: !(minute % 3)
// 			? `Fizz`
// 			: `tick`)(time.split(`:`).map(Number));

// console.log(fizzBuzzCuckooClock('13:34'));

// const factorial = (n) => (n < 0 ? null : n === 0 ? 1 : n * factorial(n - 1));

// console.log(factorial(5));
// console.log(factorial(-1));

// const howManyTimes = (annualPrice, individualPrice) =>
// 	Math.ceil(annualPrice / individualPrice);

// console.log(howManyTimes(40, 15));
// console.log(howManyTimes(80, 15));

// const solution = (string, limit) =>
// 	string.slice(0, limit) + (string.length <= limit ? '' : '...');

// console.log(solution('Testing String', 3));
// console.log(solution('Testing String', 8));
// console.log(solution('Test', 4));

// const makeValley = (arr) => [
// 	...arr.sort((a, b) => b - a).filter((_, index) => !(index % 2)),
// 	...arr.filter((_, index) => index % 2).reverse(),
// ];

// console.log(makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]));

// const consecutive = (arr) =>
// 	(Math.max(...arr) - Math.min(...arr) - arr.length + 1) | 0;

// console.log(consecutive([4, 8, 6]));
// console.log(consecutive([1, 2, 3, 4]));

// const peak = (arr) =>
// 	arr.reduce((acc, _, index, arr) => {
// 		const condition =
// 			arr.slice(index + 1).reduce((a, b) => a + b, 0) ===
// 			arr.slice(0, index).reduce((a, b) => a + b, 0);
// 		if (condition && acc === -1) {
// 			acc = index;
// 		}
// 		return acc;
// 	}, -1);

// const countArara = (n) =>
// 	`${`adak `.repeat(n / 2)}${`anane`.repeat(n % 2)}`.trim();

// console.log(countArara(1));
// console.log(countArara(3));

// function dotCalculator(equation) {
// 	const [first, sign, second] = equation.split(' ');
// 	switch (sign) {
// 		case '+':
// 			return '.'.repeat(first.length + second.length);
// 		case '-':
// 			return '.'.repeat(first.length - second.length);
// 		case '*':
// 			return '.'.repeat(first.length * second.length);
// 		default:
// 			return '.'.repeat(first.length / second.length);
// 	}
// }

// console.log(dotCalculator('..... // ..'));

// const largestPower = (n) => (--n ? (Math.log(n) / Math.log(3)) ^ 0 : -1);

// console.log(largestPower(82));

// const digits = (num) =>
// 	[...String(num)].reduce(
// 		(acc, number, index, arr) => [
// 			...acc,
// 			...arr.slice(++index).map((el) => Number(number) + Number(el)),
// 		],
// 		[]
// 	);

// console.log(digits(156));

// const nthChar = (words) =>
// 	words.reduce((acc, word, index) => acc + word[index], '');

// console.log(nthChar(['yoda', 'best', 'has']));

// const reverse = (number, acc = 0) => {
// 	if (!number) {
// 		return acc;
// 	}

// 	acc = acc * 10 + (number % 10);

// 	return reverse(Math.floor(number / 10), acc);
// };

// console.log(reverse(123));

// const chain = (input, fs) => fs.reduce((acc, el) => el(acc), input);

// const capital = (capitals) =>
// 	capitals.map(
// 		({ country, state, capital }) =>
// 			`The capital of ${country || state} is ${capital}`
// 	);

// console.log(
// 	capital([
// 		{ state: 'Maine', capital: 'Augusta' },
// 		{ country: 'Spain', capital: 'Madrid' },
// 	])
// );

// const range = (startNum, endNum) =>
// 	[...Array(endNum - 1 - startNum)].map((_, index) => index + 1 + startNum);

// console.log(range(2, 9));

// const makePassword = (phrase) =>
// 	phrase
// 		.replace(/\s*(\w)\w*/g, `$1`)
// 		.replace(/o/gi, `0`)
// 		.replace(/i/gi, `1`)
// 		.replace(/s/gi, `5`);

// console.log(makePassword('Give me liberty or give me death'));

// const sortme = (names) => names.sort();

// console.log(sortme(['one', 'two', 'three']));

// const calcType = (a, b, res) =>
// 	({
// 		[a + b]: `addition`,
// 		[a - b]: `subtraction`,
// 		[a * b]: `multiplication`,
// 		[a / b]: `division`,
// 	}[res]);

// console.log(calcType(10, 4, 40));
// console.log(calcType(10, 5, 5));

// const quotable = (name, quote) => `${name} said: "${quote}"`;

// const multi = (arr) => arr.reduce((acc, el) => acc * el, 1);

// const add = (arr) => arr.reduce((acc, el) => acc + el, 0);

// const reverse = (str) => [...str].reverse().join(``);

// const listToArray = (list) =>
// 	list ? [list.value, ...listToArray(list.next)] : [];

// console.log(
// 	listToArray({ value: 1, next: { value: 2, next: { value: 3, next: null } } })
// );

// const arrCheck = (value) => value.every(Array.isArray);

// const isFlush = (cards) =>
// 	cards.every((card) => cards[0].slice(-1) === card.slice(-1));
