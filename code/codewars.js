class Person {
	constructor(name) {
		this.name = name;
	}
	greet(name) {
		return 'Hello ' + name + ', my name is ' + this.name;
	}
}

var joe = new Person('Joe');
console.log(joe.greet('Kate')); // should return 'Hello Kate, my name is Joe'
joe.name;
