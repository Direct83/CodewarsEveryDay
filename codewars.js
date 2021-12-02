const sevenAte9 = (str) => str.replace(/79(?=7)/g, '7');

console.log(sevenAte9('7979797')); // 7777
