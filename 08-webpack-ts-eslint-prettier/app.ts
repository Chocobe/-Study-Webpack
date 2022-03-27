import Greeting from "@/Greeting";

function initApp(): void {
	const randomNum = Math.ceil(Math.random() * 10);

	const msg = `랜덤값: ${randomNum}`;

	const mainElement = document.querySelector(".main") as HTMLDivElement;
	mainElement.innerText = msg;

	const greeting = new Greeting("Chocobe");
	greeting.sayHello();
}

initApp();
