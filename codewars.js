class Dinglemouse {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFullName() {
		return `${this.firstName} ${this.lastName}`.trim();
	}
}

console.log(new Dinglemouse('Clint', 'Eastwood').getFullName()); // Clint Eastwood
console.log(new Dinglemouse('', 'Eastwood').getFullName()); // Eastwood
