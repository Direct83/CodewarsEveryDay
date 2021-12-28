import { pipe, ascend, last, split, sort, length } from 'ramda';

const longestWord = pipe(split` `, sort(ascend(length)), last);

console.log(longestWord('red blue grey'));
