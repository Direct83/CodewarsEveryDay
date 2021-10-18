const solve = (arr) => arr.filter((el, i, m) => m.lastIndexOf(el) === i)


console.log(solve([3,4,4,3,6,3])) //[4,6,3]
