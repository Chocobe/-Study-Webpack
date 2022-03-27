import RandomNum from "@/RandomNum";

class User {
  name: string;
  age: number;
  isActive: boolean;

  constructor(name: string, age: number, isActive: boolean) {
    this.name = name;
    this.age = age;
    this.isActive = isActive;
  }

  sayHello(): void {
    let msg = `Hello, ${this.name}<br/>`;
    msg += `You are ${this.age} years old<br/>`;
    msg += this.isActive ? `Your status is active` : `Your state is sleep`;

    const mainElement = document.querySelector(".main") as HTMLDivElement;
    mainElement.innerHTML = msg;
  }
}

function initApp(): void {
  const kim = new User("Kim", 35, true);
  kim.sayHello();

  const randomNum = new RandomNum(1, 10);
  console.log(randomNum.value);
}

initApp();