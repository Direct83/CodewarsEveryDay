const validateCode = (code) => /^[1-3]/.test(code);

console.log(validateCode(423));
console.log(validateCode(323));
