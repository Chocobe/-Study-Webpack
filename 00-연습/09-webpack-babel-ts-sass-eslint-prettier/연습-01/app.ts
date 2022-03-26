import "./app.scss";
import { AppParams } from "./AppParams";

class App {
  _targetElement?: HTMLElement;

  _name?: string;

  _isProgrammer?: boolean;

  constructor(params: AppParams) {
    this._initTargetElement(params);
    this._initProperties(params);

    console.log(this);
  }

  _initTargetElement({ selector }: AppParams): void {
    this._targetElement = document.querySelector(selector) as HTMLElement;
  }

  _initProperties({ name, isProgrammer }: AppParams): void {
    this._name = name;
    this._isProgrammer = isProgrammer;
  }

  mount() {
    const { _targetElement, _name, _isProgrammer } = this;

    _targetElement &&
      (_targetElement.innerHTML = `Hello, ${_name} [${_isProgrammer}]`);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const app = new App({
    selector: ".sectionWrapper-section-title",
    name: "초코비",
    isProgrammer: true,
  });

  setTimeout(() => {
    app.mount();
  }, 2000);
});
