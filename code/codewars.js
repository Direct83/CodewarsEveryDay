const reOrdering = (text) => text.replace(/(.+) ([A-Z]\w*)/, `$2 $1`);

console.log(reOrdering('ming Yao'));
console.log(reOrdering('bull color pig Patrick'));
