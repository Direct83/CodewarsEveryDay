const maxNumber = (n) => Number([...String(n)].sort((a, b) => b - a).join(''))

console.log(maxNumber(123))  // 321
