export default class Content {
  content!: string;
  element!: HTMLElement;

  constructor(content: string, element: HTMLElement) {
    this.content = content;
    this.element = element;
  }

  mount() {
    this.element.innerHTML = this.content;
  }
}
