import { performance } from 'perf_hooks';

const maxTests = 200;
const testLoopLimit = 1000000;

function runTest(index = 1, results = { usingVar: 0, usingLet: 0 }) {
	console.log(`Running Test #${index} of ${maxTests}`);
	setTimeout(() => {
		const varTime = usingVar();
		const letTime = usingLet();
		results.usingVar += varTime;
		results.usingLet += letTime;
		console.log(`Test ${index}: var = ${varTime.toFixed(2)}ms, let = ${letTime.toFixed(2)}ms`);
		++index;
		if (index <= maxTests) {
			setTimeout(() => runTest(index, results), 0);
		} else {
			console.log(`Average time with var: ${(results.usingVar / maxTests).toFixed(2)}ms`);
			console.log(`Average time with let: ${(results.usingLet / maxTests).toFixed(2)}ms`);
		}
	}, 0);
}

function usingVar() {
	const start = performance.now();
	let x = 0;
	for (var i = 0; i < testLoopLimit; i++) {
		x += i;
	}
	const endTime = performance.now();
	return endTime - start;
}

function usingLet() {
	const start = performance.now();
	let x = 0;
	for (let i = 0; i < testLoopLimit; i++) {
		x += i;
	}
	const endTime = performance.now();
	return endTime - start;
}

runTest();
