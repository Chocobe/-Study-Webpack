import Title from "@/Title";
import Content from "@/Content";

import "./style.scss";
import "./app.scss";

class App {
  title!: Title;
  content!: Content;

  constructor(title: string, content: string) {
    this.initTitle(title);
    this.initContent(content);
  }

  initTitle(title: string) {
    this.title = new Title(
      title,
      document.querySelector(".myContainer-section-title") as HTMLElement,
    );
  }

  initContent(content: string) {
    this.content = new Content(
      content,
      document.querySelector(".myContainer-section-content") as HTMLElement,
    );
  }

  mount() {
    this.title.mount();
    this.content.mount();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const app = new App("Webpack 복습", "Hello World");

  setTimeout(() => app.mount(), 2000);
});
