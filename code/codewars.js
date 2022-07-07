const replaceNth = (text, n, oldValue, newValue, count = 0) =>
	n > 0
		? text.replace(new RegExp(oldValue, 'g'), (symbol) =>
				++count % n === 0 ? newValue : symbol
		  )
		: text;

console.log(replaceNth('Vader said: No, I am your father!', 2, 'a', 'o')); // "Vader soid: No, I am your fother!"
