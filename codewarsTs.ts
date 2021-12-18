import fetch from 'node-fetch';

const todosIds = [3, 1, 2];
const arrayFetchTodos = todosIds.map((number) => {
	return fetch(`https://jsonplaceholder.typicode.com/todos/${number}`).then((response) => response.json());
});

const promiseAllTest = (arr: Promise<any>[]): Promise<any[]> =>
	arr.reduce((acc, cur) => acc.then((data) => cur.then((curData) => [...data, curData])), Promise.resolve([]));

(async () => {
	const response = await promiseAllTest(arrayFetchTodos);
	console.log(response);
})();
