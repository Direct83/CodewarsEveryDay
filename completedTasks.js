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
