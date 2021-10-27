const sumCubes = (n) => n === 1? 1: n**3 + sumCubes(n - 1)

console.log(sumCubes(3))// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
