const evenNumbers = (array, number) => array.filter((el) => el % 2 === 0).slice(-number)

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) // [4, 6, 8]

const str = 'fdggsGFfgferhjg78d6fr86dg4r8g4'

const fun = (str) => {
	return {
		str: str.match(/[a-z]/gi).filter((el, i, m) => m.lastIndexOf(el) === i),
		numbers: str.match(/\d/g).reduce((acc, el) => acc + Number(el), 0)
	}
}
