// inheritance
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// parent class
var Persons = (function () {
    function Persons(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    return Persons;
}());
// child class
var Manager = (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, address) {
        return _super.call(this, name, age, address) || this;
    }
    return Manager;
}(Persons));
// getter and setter
var Box = (function () {
    function Box() {
        this._volume = 0;
    }
    Object.defineProperty(Box.prototype, "volume", {
        get: function () {
            return this._volume;
        },
        set: function (vol) {
            this._volume = vol;
        },
        enumerable: true,
        configurable: true
    });
    return Box;
}());
var myBox = new Box();
console.log(myBox.volume);
myBox.volume = 10;
console.log(myBox.volume);
// static property and methods
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.greetings = function () {
        return "Hello World";
    };
    return Helpers;
}());
Helpers.BASE_URL = "https://www.example.com";
console.log(Helpers.BASE_URL);
console.log(Helpers.greetings());
// abstract classes
var PersonClass = (function () {
    function PersonClass() {
        this.score = 0;
    }
    PersonClass.prototype.getName = function () {
        return this.name;
    };
    return PersonClass;
}());
var ManagerClass = (function (_super) {
    __extends(ManagerClass, _super);
    function ManagerClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ManagerClass.prototype.setName = function (name) {
        this.name = name;
    };
    return ManagerClass;
}(PersonClass));
// private constructor - singleton
var SingletonClass = (function () {
    function SingletonClass(name) {
        this.name = name;
    }
    SingletonClass.getInstance = function () {
        if (!SingletonClass.instance) {
            SingletonClass.instance = new SingletonClass("Singleton Class");
        }
        return SingletonClass.instance;
    };
    return SingletonClass;
}());
var singleton = SingletonClass.getInstance();
console.log(singleton);
