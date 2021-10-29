const vowelIndices = (word) => {
	const vowel =['a', 'e', 'i', 'o', 'u', 'y']
	return [...word].reduce((acc, el, i) => {
		vowel.includes(el) && acc.push(i + 1)
		return acc
	}, [])
}

console.log(vowelIndices("apple")) // [1,5]
