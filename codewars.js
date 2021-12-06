const hasSubpattern = (string) => /^(.*)\1+$/.test(string);

console.log(hasSubpattern('abbaabbaabba')); // true
