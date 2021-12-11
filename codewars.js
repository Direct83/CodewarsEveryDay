const revrot = (str, sz) =>
	sz <= 0 || sz > str.length || str == ''
		? ''
		: str2chunks(str, sz)
				.map((chunk) =>
					isSumOfCubesOfDigitsOdd(chunk) ? rotate(chunk) : reverse(chunk)
				)
				.join('');

const str2chunks = (s, c) => s.match(new RegExp('.{' + c + '}', 'g')) || [];
const isSumOfCubesOfDigitsOdd = (str) => str.replace(/[02468]/g, '').length % 2;
const rotate = (str) => str.slice(1) + str[0];
const reverse = (str) => str.split('').reverse().join('');

console.log(revrot('733049910872815764', 5)); // 330479108928157
console.log(revrot('73304991087281576455176044327690580265896', 8)); // 1994033775182780067155464327690480265895
