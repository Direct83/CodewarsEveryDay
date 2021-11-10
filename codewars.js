const switcheroo = (x) => x.replace(/[ab]/g, (x) => (x === 'a' ? 'b' : 'a'));

console.log(switcheroo('acb')); // bca
