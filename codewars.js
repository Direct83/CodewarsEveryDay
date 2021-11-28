const toUnderscore = (string) =>
	String(string)
		.replace(/(.)([A-Z])/g, '$1_$2')
		.toLowerCase();

console.log(toUnderscore('TestController')); // test_controller
console.log(toUnderscore('App7Test')); // app7_test
