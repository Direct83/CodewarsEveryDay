const isLucky = (n) =>
	[...String(n)].reduce((acc, el) => acc + Number(el), 0) % 9 === 0;

console.log(isLucky(1892376));
console.log(isLucky(0));
