const isPalindrome = (x) =>
	[...x].reverse().join('').toLowerCase() === x.toLowerCase();
