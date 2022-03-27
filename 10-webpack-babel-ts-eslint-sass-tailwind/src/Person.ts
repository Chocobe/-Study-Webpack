import Info from "@Info/Info";

export default class Person extends Info {
  name!: string;
  age!: number;
  isProgrammer!: boolean;

  constructor(name: string, age: number, isProgrammer: boolean) {
    super();

    this.name = name;
    this.age = age;
    this.isProgrammer = isProgrammer;
  }

  override mount() {
    const { name, age, isProgrammer } = this;
    const $el = this.getTargetElement();

    $el.innerHTML = `${name} || ${age} || ${isProgrammer}`;
  }

  override getTargetElement(): HTMLElement {
    return document.querySelector(
      ".sectionWrapper-section-person",
    ) as HTMLElement;
  }
}
