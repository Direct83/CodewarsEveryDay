const solve = (arr) => arr.map(el =>
	[...el.toLowerCase()].reduce((acc, el, i)=> Number(el.charCodeAt()-96 === i + 1) + acc
, 0))


console.log(solve(["abode","ABc","xyzD"]))  // [4, 3, 1]
