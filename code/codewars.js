const broken = (x) => x.replace(/./g, (x) => (x === '0' ? '1' : '0'));

console.log(broken('10000000101101111110011001000'));
