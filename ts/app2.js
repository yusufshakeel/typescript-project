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
