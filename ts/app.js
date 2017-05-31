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
