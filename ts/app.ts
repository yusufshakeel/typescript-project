var message = "hello world";
console.log(message);

// number
let myScore = 10;
console.log(typeof myScore);

// string
let myName = "Yusuf Shakeel";
console.log(typeof myName);

// boolean
let isGameOver = false;
console.log(typeof isGameOver);

// null
let myVar: null = null;
console.log(myVar);

// array (only string elements)
let myExtra = ["Speed2x", "Speed3x"];
console.log(typeof myExtra);

// setting type
let newScore: number = 20;
let newName: string = "Yusuf Shakeel";
let newGameStatus: boolean = true;

// array (any type of data like number, string etc)
let newArr: any[] = ["Speed5x", 100, true];

// tuples
let myGameSettings: [string, number, boolean] = ["Level 5", 5, true];

// enum
enum myColor {
	Red,
	Green,
	Blue
};
let myColorCode: myColor = myColor.Red;
console.log(typeof myColorCode);

// any
let myAnyVar: any = "string value";
myAnyVar = 12;

// function
function foo() {
	return myName;
}
console.log(foo());

// function with return type
function bar(): number {
	return 10;
}
console.log(bar());

// function with return type void
function moo(): void {
	console.log("inside moo()");
}
console.log(moo());

// function argument type and return type
function add(x: number, y: number): number {
	return x + y;
}
console.log(add(10, 20));

// function type - passing two argument and getting number as return type
let myFun: (val1: number, val2: number) => number;
myFun = add;
console.log(myFun(2, 3));

// object type - key-value pair
let myObj: { name: string, score: number} = {
	name: "Yusuf",
	score: 100
};

// object example
let myPlayer: {detail: {name: string, id: number}, score: number[], getScore: (id: number) => number[]} = {
	detail: {
		name: "Yusuf",
		id: 1
	},

	score: [10, 20, 30],

	getScore: function(id: number): number[] {
		return this.score;
	}
};
console.log(myPlayer.getScore(1));

// type alias
type myCustomType = {
	detail: {
		name: string,
		id: number
	},

	score: number[],

	getScore: (id: number) => number[]

};
// create variable with the given type
let myCustomVar: myCustomType = {
	detail: {
		name: "Yusuf Shakeel",
		id: 1
	},

	score: [10, 20],

	getScore: function(id: number): number[] {
		return this.score;
	}
};

// union type - variable that can have specified type of values
let myData: number | string;
myData = 10;
myData = "Hello World";