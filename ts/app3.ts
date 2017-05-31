// class
class Person {

	//this is public by default
	name: string;

	//this is another public property of the class
	public score: number;

	//this is private property only accessible from inside the class
	private address: string;

	//this is protected property and accessible from inside this class
	//and from any class that inherits this class
	protected accountStatus: string = "ACTIVE";

	//constructor
	//the second parameter will create a public property username
	//and also assign value passed to the constructor
	constructor(name: string, public username: string) {
		this.name = name;
	}

	//methods
	public setScore(score: number) {
		this.score = score;
	}

	public getScore() {
		return this.score;
	}

	public setAddress(address: string) {
		this.address = address;
	}

	public getAddress() {
		return this.address;
	}

	public setAccountStatus(status: string) {
		this.accountStatus = status;
	}

}

//creating object of the class
let person = new Person("Yusuf Shakeel", "yusufshakeel");
console.log(person);

person.setScore(10);
person.setAddress("Some sample address");
person.setAccountStatus("ACTIVE");
console.log(person);