class App {
  /** @type { string } */
  _name;

  /** @type { number } */
  _age;

  /**
   * @param { string } name
   * @param { number } age
   */
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  print() {
    console.log(
      `Hello World, 🚀 ${this._name} 👩 ${this._age} 👍 Hello Eslint 😂 Hello Prettier`,
    );

    console.log("Hello World");
  }
}

window.addEventListener("DOMContentLoaded", () => new App());
