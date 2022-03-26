class App {
  _targetElement?: HTMLElement;

  _name?: string;

  _isProgrammer?: boolean;

  constructor({
    selector,
    name,
    isProgrammer,
  }: {
    selector: string;
    name: string;
    isProgrammer: boolean;
  }) {
    this._initTargetElement(selector);
    this._initProperties(name, isProgrammer);
  }

  _initTargetElement(selector: string): void {
    this._targetElement = document.querySelector(selector) as HTMLElement;
  }

  _initProperties(name: string, isProgrammer: boolean): void {
    this._name = name;
    this._isProgrammer = isProgrammer;
  }

  mount(): void {
    const { _targetElement, _name, _isProgrammer } = this;

    _targetElement &&
      (_targetElement.innerHTML = `Hello 👩👩 ${_name} (${_isProgrammer})`);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const app = new App({
    selector: ".title",
    name: "Chocobe 🚀",
    isProgrammer: true,
  });

  setTimeout(() => {
    app.mount();
  }, 2000);
});
