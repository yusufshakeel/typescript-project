// inheritance

// parent class
class Persons {

	name: string;
	age: number;
	address: string;

	constructor(name: string, age: number, address: string) {
		this.name = name;
		this.age = age;
		this.address = address;
	}

}

// child class
class Manager extends Persons {

	constructor(name: string, age: number, address: string) {
		super(name, age, address);
	}

}


// getter and setter
class Box {

	private _volume: number = 0;

	set volume(vol: number) {
		this._volume = vol;
	}

	get volume() {
		return this._volume;
	}
}

let myBox = new Box();
console.log(myBox.volume);
myBox.volume = 10;
console.log(myBox.volume);


// static property and methods
class Helpers {
	static BASE_URL: string = "https://www.example.com";
	static greetings() {
		return "Hello World";
	}
}
console.log(Helpers.BASE_URL);
console.log(Helpers.greetings());


// abstract classes
abstract class PersonClass {
	name: string;
	score: number = 0;

	abstract setName(name: string): void;

	getName() {
		return this.name;
	}
}

class ManagerClass extends PersonClass {

	setName(name: string): void {
		this.name = name;
	}
}


// private constructor - singleton
class SingletonClass {

	private static instance: SingletonClass;

	private constructor(public readonly name: string) {}

	static getInstance() {

		if (!SingletonClass.instance) {
			SingletonClass.instance = new SingletonClass("Singleton Class");
		}
		
		return SingletonClass.instance;

	}

}
let singleton = SingletonClass.getInstance();
console.log(singleton);