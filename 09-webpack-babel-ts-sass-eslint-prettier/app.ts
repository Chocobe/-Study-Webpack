import "./mainStyle.scss";
import "./boxStyle.css";

interface User {
	id: number;
	name: string;
	isActive: boolean;
}

function printUser(id: number, name: string, isActive: boolean): void {
	const user: User = {
		id,
		name,
		isActive,
	};

	const mainElement = document.querySelector(".main") as HTMLDivElement;

	let msg = `Hello, <span class="main-name">${user.name}</span><br/>`;
	msg += `ID: <span class="main-id">${user.id}</span><br/>`;
	msg += `Active: <span class="main-active">${user.isActive}</span>`;

	mainElement.innerHTML = msg;
}

function initApp(): void {
	printUser(123, "Chocobe", true);
}

initApp();
