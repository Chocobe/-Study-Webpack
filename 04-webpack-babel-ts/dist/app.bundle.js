/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Book = /*#__PURE__*/function () {
  function Book(name, price, publisher, author) {
    _classCallCheck(this, Book);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "price", void 0);

    _defineProperty(this, "publisher", void 0);

    _defineProperty(this, "author", void 0);

    this.name = name;
    this.price = price;
    this.publisher = publisher;
    this.author = author;
  }

  _createClass(Book, [{
    key: "printInfo",
    value: function printInfo() {
      var msg = "<div>\uB3C4\uC11C\uBA85: ".concat(this.name, "</div>");
      msg += "<div>\uAC00\uACA9: ".concat(this.price, "</div>");
      msg += "<div>\uCD9C\uD310\uC0AC: ".concat(this.publisher, "</div>");
      msg += "<div>\uC800\uC790: ".concat(this.author, "</div>");
      var mainElement = document.querySelector(".main");
      mainElement.innerHTML = msg;
    }
  }]);

  return Book;
}();

function initApp() {
  var tsGuideBook = new Book("TS 가이드북", 50000, "초코 출판사", "초코비");
  tsGuideBook.printInfo();
}

initApp();
/******/ })()
;