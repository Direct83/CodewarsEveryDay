const wordsToMarks = (str) => [...str].reduce((acc,el) => acc += el.charCodeAt()-96, 0)

console.log(wordsToMarks('ab'))
