function absoluteSorting(values: number[]): number[] {
	return values.sort((a, b) => Math.abs(a) - Math.abs(b));
}

console.log('Example:');
console.log(absoluteSorting([-20, -5, 10, 15])); // [ -5, 10, 15, -20]
absoluteSorting([1, 2, 3, 0]); // [0, 1, 2, 3]

function goesAfter(word: string, first: string, second: string): boolean {
	const indexSecond = word.indexOf(second);
	return !![...word].find(
		(el, index, arr) =>
			el === first && arr[index + 1] === second && index + 1 === indexSecond
	);
}

console.log('Example:');
console.log(goesAfter('world', 'w', 'o')); // true
console.log(goesAfter('world', 'w', 'r')); // false
console.log(goesAfter('almaz', 'm', 'a')); // false

function timeConverter(dayTime) {
	const hour = Number(dayTime.slice(0, 2));
	return hour > 12
		? `${hour - 12}${dayTime.slice(2)} p.m.`
		: hour === 12
		? `${hour}${dayTime.slice(2)} p.m.`
		: hour === 0
		? `${hour + 12}${dayTime.slice(2)} a.m.`
		: `${hour}${dayTime.slice(2)} a.m.`;
}

console.log('Example:');
console.log(timeConverter('12:30')); // '0:30 p.m.'
console.log(timeConverter('09:00')); // '9:00 a.m.'
console.log(timeConverter('23:15')); // '11:15 p.m.'
console.log(timeConverter('00:30')); // 12:30 p.m.
console.log(timeConverter('00:00')); // 12:00 a.m.

function sumByTypes(values: Array<number | string>): [string, number] {
	return values.reduce(
		(acc, el) => {
			if (typeof el === 'number') {
				acc[1] += el;
			} else {
				acc[0] += el;
			}
			return acc;
		},
		['', 0]
	);
}
console.log(sumByTypes(['size', 12, 'in', 45, 0])); // ['sizein', 57]

function translate(text: string): any {
	return [...text]
		.map((el, index, arr) =>
			/[aeiouy]/.test(el) && !/[aeiouy]/.test(arr[index - 1]) ? '' : el
		)
		.join('')
		.replace(/a+|e+|i+|o+|u+|y+/g, (x) =>
			x.length <= 3 ? x[0] : x[0].repeat(Math.ceil(x.length / 3))
		);
}

console.log(translate('hieeelalaooo')); //'hello'
console.log(translate('hoooowe yyyooouuu duoooiiine')); //how you doin'
console.log(translate('aaa bo cy da eee fe')); //'a b c d e f'
console.log(translate('sooooso aaaaaaaaa')); // 'sos aaa'
