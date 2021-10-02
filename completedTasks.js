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
