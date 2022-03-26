/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// @ts-check

class App {
  /** @type { string } */
  _name;

  /** @type { number } */
  _age;

  /** @type { HTMLElement } */
  _targetElement;

  /**
   * @param { string } selector
   * @param { string } name 
   * @param { number } age 
   */
  constructor(selector, name, age) {
    this._initTargetElement(selector);
    this._initProperties(name, age);
  }

  /** @param { string } selector */
  _initTargetElement(selector) {
    this._targetElement = document.querySelector(selector);
  }

  /**
   * @param { string } name 
   * @param { number } age 
   */
  _initProperties(name, age) {
    this._name = name;
    this._age = age;
  }

  mount() {
    const { _targetElement, _name, _age } = this;

    _targetElement.innerHTML = `Hello, ${_name} (${_age})`;
  }
}

window.addEventListener(
  "DOMContentLoaded",
  () => {
    const app = new App(".greeting", "Chocobe", 36);
    
    setTimeout(() => {
      app.mount();
    }, 2000);
  }
);
/******/ })()
;