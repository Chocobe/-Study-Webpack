export default class Greeting {
  name!: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello(targetName: string): void {
    console.log(`Hello, ${targetName}. I'm ${this.name}`);
  }
}
