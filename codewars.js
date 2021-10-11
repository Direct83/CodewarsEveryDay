function menFromBoys(arr){
	const arrUniq = [...new Set(arr)]
	const even = arrUniq.filter(el => el % 2 === 0).sort((a, b) => a - b)
	const odds = arrUniq.filter(el => el % 2).sort((a, b) => b - a)
	return [...even, ...odds]
}

console.log(menFromBoys([2,43,95,90,37]))
console.log(menFromBoys([2,15,17,15,2,10,10,17,1,1]))
