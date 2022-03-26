/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var App = /*#__PURE__*/function () {
  function App(selector, name, isProgrammer) {
    _classCallCheck(this, App);

    _defineProperty(this, "_targetElement", void 0);

    _defineProperty(this, "_name", void 0);

    _defineProperty(this, "_isProgrammer", void 0);

    this._initTargetElement(selector);

    this._initProperties(name, isProgrammer);
  }

  _createClass(App, [{
    key: "_initTargetElement",
    value: function _initTargetElement(selector) {
      this._targetElement = document.querySelector(selector);
    }
  }, {
    key: "_initProperties",
    value: function _initProperties(name, isProgrammer) {
      this._name = name;
      this._isProgrammer = isProgrammer;
    }
  }, {
    key: "mount",
    value: function mount() {
      var _targetElement = this._targetElement,
          _name = this._name,
          _isProgrammer = this._isProgrammer;
      _targetElement && (_targetElement.innerHTML = "Hello \uD83D\uDE80 ".concat(_name, " (").concat(_isProgrammer, ")"));
    }
  }]);

  return App;
}();

window.addEventListener("DOMContentLoaded", function () {
  var app = new App(".greeting", "Chocobe", true);
  setTimeout(function () {
    app.mount();
  }, 2000);
});
/******/ })()
;