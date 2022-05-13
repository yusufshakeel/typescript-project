class Person {
    protected fullName: string;

    constructor(fullName: string) {
        this.fullName = fullName;
    }

    setFullName(fullName: string): void {
        this.fullName = fullName;
    }

    getFullName(): string {
        return this.fullName;
    }
}

const person = new Person('Tin Tin');
console.log(person.getFullName());
person.setFullName('Professor Calculus');
console.log(person.getFullName());

class Employee extends Person {
    greetings(): string {
        return `Hello, ${this.fullName}`;
    }
}

const employee = new Employee('Tin Tin');
console.log(employee.greetings());