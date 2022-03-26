class App {
  _targetElement?: HTMLElement;
  
  _name?: string;

  _age?: number;

  constructor(
    selector: string,
    name: string,
    age: number
  ) {
    this._initTargetElement(selector);
    this._initProperties(name, age);
  }

  _initTargetElement(selector: string): void {
    this._targetElement = document.querySelector(selector) as HTMLElement;
  }

  _initProperties(name: string, age: number): void {
    this._name = name;
    this._age = age;
  }

  mount(): void {
    // const targetElement = this._targetElement as HTMLElement;
    const { _targetElement, _name, _age } = this;

    _targetElement && (
      _targetElement.innerHTML = 
        `Hello, ${_name}. This is TS Project (${_age})`
    );
  }
}

window.addEventListener(
  "DOMContentLoaded",
  () => {
    const app = new App(
      ".greeting",
      "Chocobe",
      36
    );

    setTimeout(() => {
      app.mount();
    }, 2000);
  }
);