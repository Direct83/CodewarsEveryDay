const twoDecimalPlaces = (number) => Number(String(number).match(/.*\.\d\d/));

console.log(twoDecimalPlaces(-7488.83585834983));
console.log(twoDecimalPlaces(10.1289767789));
