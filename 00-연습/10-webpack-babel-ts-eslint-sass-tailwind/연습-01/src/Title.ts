export default class Title {
  title!: string;
  element!: HTMLElement;

  constructor(title: string, element: HTMLElement) {
    this.title = title;
    this.element = element;
  }

  mount() {
    this.element.innerHTML = this.title;
  }
}
