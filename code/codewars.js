const getNumberFromString = (s) => Number(s.match(/\d/g).join(''));

console.log(getNumberFromString('123'));
