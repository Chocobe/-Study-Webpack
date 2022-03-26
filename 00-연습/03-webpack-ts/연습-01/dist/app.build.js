/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

class App {
    _targetElement;
    _name;
    _age;
    constructor(selector, name, age) {
        this._initTargetElement(selector);
        this._initProperties(name, age);
    }
    _initTargetElement(selector) {
        this._targetElement = document.querySelector(selector);
    }
    _initProperties(name, age) {
        this._name = name;
        this._age = age;
    }
    mount() {
        // const targetElement = this._targetElement as HTMLElement;
        const { _targetElement, _name, _age } = this;
        _targetElement && (_targetElement.innerHTML =
            `Hello, ${_name}. This is TS Project (${_age})`);
    }
}
window.addEventListener("DOMContentLoaded", () => {
    const app = new App(".greeting", "Chocobe", 36);
    setTimeout(() => {
        app.mount();
    }, 2000);
});

/******/ })()
;