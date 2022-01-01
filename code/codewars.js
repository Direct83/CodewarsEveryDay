const vaporcode = (string) => [...string.replace(/\s/g, '').toUpperCase()].join('  ');

console.log(vaporcode('Lets go to the movies'));
