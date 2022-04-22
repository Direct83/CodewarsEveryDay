const vowel2index = (str) => str.replace(/[aeiou]/gi, (m, i) => i + 1);

console.log(vowel2index('this is my string'));
