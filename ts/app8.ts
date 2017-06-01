// decorators
function logged(constructorFn: Function) {
	console.log(constructorFn);
}

@logged
class sampleClassWithDecorator {
	constructor() {
		console.log("Hi");
	}
}

//factory
function logging(value: boolean) {
	return value ? logged : null;
}

@logging(false)
class AnotherClass {

}