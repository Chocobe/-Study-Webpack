/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

var User = /** @class */ (function () {
    function User(name, age, isActive) {
        this.name = name;
        this.age = age;
        this.isActive = isActive;
    }
    User.prototype.sayHello = function () {
        var msg = "Hello, " + this.name + "<br/>";
        msg += "You are " + this.age + " years old<br/>";
        msg += this.isActive ? "Your status is active" : "Your state is sleep";
        var mainElement = document.querySelector(".main");
        mainElement.innerHTML = msg;
    };
    return User;
}());
function initApp() {
    var kim = new User("Kim", 35, true);
    kim.sayHello();
}
initApp();

/******/ })()
;