const listOfNumbers: Array<number> = [1, 2, 3];
const listOfStrings: Array<string> = ['hello', 'world'];

const setOfNumbers: Set<number> = new Set([1, 1, 2, 1, 3]);
const setOfStrings: Set<string> = new Set(['hello', 'hello', 'world']);

const httpsRegEx: RegExp = new RegExp('https');

class Stack<T> {
    private stack: Array<T> = [];

    push(item: T) {
        this.stack.push(item);
    }

    pop(): T | undefined {
        return this.stack.pop();
    }

    peek(): T {
        return this.stack[this.stack.length - 1];
    }

    size(): number {
        return this.stack.length;
    }
}

const myStackOfNumbers: Stack<number> = new Stack();

myStackOfNumbers.push(0);
myStackOfNumbers.push(1);
myStackOfNumbers.push(2);
myStackOfNumbers.push(3);

console.log(myStackOfNumbers.peek());
console.log(myStackOfNumbers.size());
console.log(myStackOfNumbers.pop());
console.log(myStackOfNumbers.peek());
console.log(myStackOfNumbers.size());