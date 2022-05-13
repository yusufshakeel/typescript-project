function addTwoNumbers(x: number, y: number): number {
    return x + y;
}

console.log(addTwoNumbers(1, 2));

const sum = (...values: number[]): number => {
    return values.reduce((result, currentValue) => result + currentValue);
};

console.log(sum(1, 2, 3, 4, 5));

const greetingsMessage = (name: string): string => {
    return `Hello, ${name}!`;
};

console.log(greetingsMessage('Yusuf'));

type OperationWithTwoOperands = (x: number, y: number) => number;
const add: OperationWithTwoOperands = (x: number, y: number): number => {
    return x + y;
};
console.log(add(1, 2));

const subtract: OperationWithTwoOperands = (x: number, y: number): number => {
    return x - y;
};
console.log(subtract(1, 2));