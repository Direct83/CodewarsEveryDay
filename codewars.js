function adjacentElementsProduct(array) {
	return array.reduce((acc, el, i, m) => {
		const number = m[i + 1] * el
		acc = number > acc ? number : acc
		return acc
	}, array[0] * array[1])
}
console.log(adjacentElementsProduct([5, 8])) // 40
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])) // -14
console.log(adjacentElementsProduct([ -714, 682 ])) //-486948
