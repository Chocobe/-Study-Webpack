/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/**
 * @returns {void}
 */
function initApp() {
  var ranNum = Math.round(Math.random() * 10) + 1;
  var msg = "\uB79C\uB364\uAC12: ".concat(ranNum);
  var mainElement = document.querySelector(".main");
  mainElement.innerHTML = msg;
}

initApp();
/******/ })()
;