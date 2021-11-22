const inviteMoreWomen = (L) => L.reduce((acc, el) => acc + el, 0) > 0;

console.log(inviteMoreWomen([1, -1, 1])); // true
console.log(inviteMoreWomen([1, -1])); // false
