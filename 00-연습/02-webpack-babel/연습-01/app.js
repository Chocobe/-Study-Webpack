// @ts-check

class App {
  /** @type { HTMLElement } */
  _targetElement

  /** @type { string } */
  _name;

  /** @type { boolean } */
  _isProgrammer;

  /**
   * @param { string } selector 
   * @param { string } name 
   * @param { boolean } isProgrammer 
   */
  constructor(selector, name, isProgrammer) {
    this._initTargetElement(selector);
    this._initProperties(name, isProgrammer);
  }

  /** @param { string } selector */
  _initTargetElement(selector) {
    this._targetElement = document.querySelector(selector);
  }

  /**
   * @param { string } name 
   * @param { boolean } isProgrammer 
   */
  _initProperties(name, isProgrammer) {
    this._name = name;
    this._isProgrammer = isProgrammer;
  }

  mount() {
    const { _targetElement, _name, _isProgrammer } = this;

    _targetElement.innerHTML = `Hello~ ${_name} (${_isProgrammer})`;
  }
}

window.addEventListener(
  "DOMContentLoaded",
  () => {
    const app = new App(".greeting", "Chocobe", true);

    setTimeout(() => {
      app.mount();
    }, 2000);
  }
);