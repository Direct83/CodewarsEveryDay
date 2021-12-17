function call<T extends [unknown, string], R>(
	f: (...args: T) => R,
	...args: T
): R {
	return f(...args);
}
function fill(length: number, value: string): string[] {
	return [...Array(length)].map((_) => value);
}
console.log(call(fill, 10, 'a')); // вычисляется как массив 10и 'a'
