// interface
interface namedPerson {

	name: string;

	//optional property
	age?: number;

	//property name not yet know
	//and total number of such properties also not know
	//in the following line we have any property name which is type string
	//and value can be any
	[prop: string]: any;

	//method of the interface
	greet(message: string): void;

}

function printPersonName(person: namedPerson) {
	console.log(person.name);
}

const person1: namedPerson = {
	name: "Yusuf Shakeel",
	score: 50,
	greet(message: string): void {
		console.log("Hello, "+ this.name+ "! "+ "You have a message: "+ message);
	}
};

printPersonName(person1);
person1.greet("123");

//class implements interface
class SomePerson implements namedPerson {

	name: string;

	greet(message: string) {
		console.log("Hello, "+ this.name+ "! "+ "You have a message: "+ message);
	}
}

const someperson1 = new SomePerson();
someperson1.name = "Yusuf Shakeel";
someperson1.greet("123");

//function type interface
interface AddValueFun {
	(x: number, y: number): number;
}

let someAddValueFun: AddValueFun = function(num1: number, num2: number): number {
	return num1 + num2;
};
console.log(someAddValueFun(10, 20));