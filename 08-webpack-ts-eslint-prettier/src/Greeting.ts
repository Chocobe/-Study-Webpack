export default class Greeting {
	name!: string;

	constructor(name: string) {
		this.name = name;
	}

	sayHello() {
		console.log(`Hello, ${this.name}`);
	}
}
