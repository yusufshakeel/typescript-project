//simple generic
function simpleGeneric(data: any) {
	return data;
}
console.log(simpleGeneric("Yusuf"));
console.log(simpleGeneric(100));
console.log(simpleGeneric({name: "Yusuf", score: 100}));

// generic
function betterGeneric<T>(data: T) {
	return data;
}
console.log(betterGeneric("Yusuf"));
console.log(betterGeneric<number>(100));
console.log(betterGeneric({name: "Yusuf", score: 100}));

//built in generic
let myNumbers: Array<number> = [1, 2, 3];
myNumbers.push(4);
console.log(myNumbers);

//arrays
function printAll<T>(args: T[]) {
	args.forEach((elem) => console.log(elem));
}
printAll<number>([1,2,3]);

// generic type
const generic1: <T>(data: T) => T = betterGeneric;
console.log(generic1<string>("Yusuf"));


// generic class
class myAddClass<T extends number | string> {
	x: T;
	y: T;
	disp() {
		return +this.x + +this.y;
	}
}

const myAddClassObj = new myAddClass<string>();
myAddClassObj.x = "10";
myAddClassObj.y = "20";
console.log(myAddClassObj.disp());


class myAddClass2<T extends number | string, U extends number | string> {
	x: T;
	y: U;
	disp() {
		return +this.x + +this.y;
	}
}

const myAddClassObj2 = new myAddClass2<string, number>();
myAddClassObj2.x = "10";
myAddClassObj2.y = 20;
console.log(myAddClassObj2.disp());