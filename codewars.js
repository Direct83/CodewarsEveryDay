const alphabetWar = (fight) => {
	const left ={
		w: 4,
		p: 3,
		b: 2,
		s: 1,
		m: -4,
		q: -3,
		d: -2,
		z: -1
	}

	const power = [...fight].reduce((acc, el) => {
		acc += left[el] || 0 + right[el] || 0
		return acc
	}, 0)

	if (power === 0) {
		return "Let's fight again!"
	}

	return  power > 0 ? "Left side wins!" : "Right side wins!"
}

console.log(alphabetWar("z"))
console.log(alphabetWar("zdqmwpbs"))
