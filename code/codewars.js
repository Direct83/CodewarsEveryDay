const last = (x) => x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));

console.log(last('take me to semynak')); // ['take', 'me', 'semynak', 'to']
