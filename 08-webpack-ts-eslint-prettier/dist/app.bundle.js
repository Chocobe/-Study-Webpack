/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

function initApp() {
    var randomNum = Math.ceil(Math.random() * 10);
    var msg = "\uB79C\uB364\uAC12: " + randomNum;
    var mainElement = document.querySelector(".main");
    mainElement.innerText = msg;
}
initApp();

/******/ })()
;