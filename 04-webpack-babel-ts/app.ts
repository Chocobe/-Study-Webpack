class Book {
  private name: string;
  private price: number;
  private publisher: string;
  private author: string;

  constructor(name: string, price: number, publisher: string, author: string) {
    this.name = name;
    this.price = price;
    this.publisher = publisher;
    this.author = author;
  }

  printInfo(): void {
    let msg = `<div>도서명: ${this.name}</div>`;
    msg += `<div>가격: ${this.price}</div>`;
    msg += `<div>출판사: ${this.publisher}</div>`;
    msg += `<div>저자: ${this.author}</div>`;

    const mainElement = document.querySelector(".main") as HTMLDivElement;
    mainElement.innerHTML = msg;
  }
}

function initApp(): void {
  const tsGuideBook = new Book("TS 가이드북", 50000, "초코 출판사", "초코비");
  tsGuideBook.printInfo();
}

initApp();