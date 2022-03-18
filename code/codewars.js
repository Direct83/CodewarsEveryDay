class A {
	name() {
		return 'alpha';
	}
	hi() {
		return `bye ${this.name()}`;
	}
}

class B extends A {
	name() {
		return `${super.name()}/beta`;
	}
	hi() {
		return `hi ${this.name()}`;
	}
}

console.log(B.prototype.hi.call(new A()));
