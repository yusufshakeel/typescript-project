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
function calculateRectangle(width, length) {
    return width * length;
}
var message = "hello world";
console.log(message);
// number
var myScore = 10;
console.log(typeof myScore);
// string
var myName = "Yusuf Shakeel";
console.log(typeof myName);
// boolean
var isGameOver = false;
console.log(typeof isGameOver);
// null
var myVar = null;
console.log(myVar);
// array (only string elements)
var myExtra = ["Speed2x", "Speed3x"];
console.log(typeof myExtra);
// setting type
var newScore = 20;
var newName = "Yusuf Shakeel";
var newGameStatus = true;
// array (any type of data like number, string etc)
var newArr = ["Speed5x", 100, true];
// tuples
var myGameSettings = ["Level 5", 5, true];
// enum
var myColor;
(function (myColor) {
    myColor[myColor["Red"] = 0] = "Red";
    myColor[myColor["Green"] = 1] = "Green";
    myColor[myColor["Blue"] = 2] = "Blue";
})(myColor || (myColor = {}));
;
var myColorCode = myColor.Red;
console.log(typeof myColorCode);
// any
var myAnyVar = "string value";
myAnyVar = 12;
// function
function foo() {
    return myName;
}
console.log(foo());
// function with return type
function bar() {
    return 10;
}
console.log(bar());
// function with return type void
function moo() {
    console.log("inside moo()");
}
console.log(moo());
// function argument type and return type
function add(x, y) {
    return x + y;
}
console.log(add(10, 20));
// function type - passing two argument and getting number as return type
var myFun;
myFun = add;
console.log(myFun(2, 3));
// object type - key-value pair
var myObj = {
    name: "Yusuf",
    score: 100
};
// object example
var myPlayer = {
    detail: {
        name: "Yusuf",
        id: 1
    },
    score: [10, 20, 30],
    getScore: function (id) {
        return this.score;
    }
};
console.log(myPlayer.getScore(1));
// create variable with the given type
var myCustomVar = {
    detail: {
        name: "Yusuf Shakeel",
        id: 1
    },
    score: [10, 20],
    getScore: function (id) {
        return this.score;
    }
};
// union type - variable that can have specified type of values
var myData;
myData = 10;
myData = "Hello World";
// es6 and typescript
// let and const
var var1 = 10;
var var2 = 10;
var PI = 3.14;
// block scope
function myFunction() {
    var var1 = 10;
    console.log(var1);
}
console.log(myFunction());
console.log(var1);
// function
var newFoo = function (x, y) {
    return x + y;
};
console.log(newFoo(1, 2));
// arrow function
var newBar = function (x, y) { return x + y; };
// alternative,
var newBar2 = function (x, y) {
    return x + y;
};
// without argument
var newBar3 = function () {
    console.log("hello");
};
console.log(newBar3());
// default parameter of a function
var myFunDefaultParam = function (x) {
    if (x === void 0) { x = 10; }
    console.log(x);
};
myFunDefaultParam(2); //this will print 2
myFunDefaultParam(); //this will print 10 (the default value)
// spread operator (...)
var myNum = [10, 20, 30, -10, -20];
// ...myNum will spread the array into comma separated numbers
// needed by the Math.min() method
console.log(Math.min.apply(Math, myNum));
// rest operator(...)
function restFun() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
// using the rest operator (...) we are passing 3 arguments to the
// restFun() which is converting the arguments into an array
// and we are also returning an array of numbers
console.log(restFun(1, 2, 3));
// destructuring - array
// we put variable name in [] and separate them by comma ,
// values from the array on the right side of the = sign
// are assigned to the variables on the left side inside the []
var myArr1 = [12, 45];
var num1 = myArr1[0], num2 = myArr1[1];
// destructuring - object
// we put variable name in {} and separate them by comma ,
// value from the object properties on the right side of the = sign
// are assigned to the variables on the left side inside the {}
function fun2() {
    var myObj1 = { name: "Yusuf", score: 50 };
    var name = myObj1.name, score = myObj1.score;
    console.log(name, score);
}
fun2();
//alternative
function fun3() {
    var myObj1 = { name: "Yusuf", score: 50 };
    var myName = myObj1.name, myScore = myObj1.score;
    console.log(myName, myScore);
}
fun3();
// template literals
function somefun1() {
    var name = "Yusuf Shakeel";
    var message = "Hello World!\nMy name is " + name;
    console.log(message);
}
somefun1();
// class
var Person = (function () {
    //constructor
    //the second parameter will create a public property username
    //and also assign value passed to the constructor
    function Person(name, username) {
        this.username = username;
        //this is protected property and accessible from inside this class
        //and from any class that inherits this class
        this.accountStatus = "ACTIVE";
        this.name = name;
    }
    //methods
    Person.prototype.setScore = function (score) {
        this.score = score;
    };
    Person.prototype.getScore = function () {
        return this.score;
    };
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.setAccountStatus = function (status) {
        this.accountStatus = status;
    };
    return Person;
}());
//creating object of the class
var person = new Person("Yusuf Shakeel", "yusufshakeel");
console.log(person);
person.setScore(10);
person.setAddress("Some sample address");
person.setAccountStatus("ACTIVE");
console.log(person);
// inheritance
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
