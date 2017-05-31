// es6 and typescript

// let and const
let var1 = 10;
let var2: number = 10;

const PI = 3.14;

// block scope
function myFunction() {
	let var1 = 10;
	console.log(var1);
}
console.log(myFunction());

console.log(var1);

// function
let newFoo = function (x: number, y: number): number {
	return x + y;
};
console.log(newFoo(1, 2));

// arrow function
let newBar = (x: number, y: number) => x + y;

// alternative,
let newBar2 = (x: number, y: number) => {
	return x + y;
};

// without argument
let newBar3 = () => {
	console.log("hello");
}
console.log(newBar3());

// default parameter of a function
let myFunDefaultParam = (x: number = 10) => {
	console.log(x);
};
myFunDefaultParam(2);	//this will print 2
myFunDefaultParam();	//this will print 10 (the default value)

// spread operator (...)
let myNum = [10, 20, 30, -10, -20];
// ...myNum will spread the array into comma separated numbers
// needed by the Math.min() method
console.log(Math.min(...myNum));

// rest operator(...)
function restFun(...args: number[]): number[] {
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
let myArr1 = [12, 45];
let [num1, num2] = myArr1;


// destructuring - object
// we put variable name in {} and separate them by comma ,
// value from the object properties on the right side of the = sign
// are assigned to the variables on the left side inside the {}
function fun2() {
	let myObj1 = { name: "Yusuf", score: 50 };
	let {name, score} = myObj1
	console.log(name, score);
}
fun2();

//alternative
function fun3() {
	let myObj1 = { name: "Yusuf", score: 50 };
	let {name: myName, score: myScore} = myObj1
	console.log(myName, myScore);
}
fun3();


// template literals
function somefun1() {
	let name = "Yusuf Shakeel";
	let message = `Hello World!
My name is ${name}`;
	console.log(message);
}
somefun1();