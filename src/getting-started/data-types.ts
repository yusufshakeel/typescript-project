const score: number = 12.34;
const isOnline: boolean = true;
const username: string = 'yusufshakeel';
const notYetDefined: undefined = undefined;
const notKnown: null = null;
const veryBigInteger: bigint = 1n;
const someSymbol: symbol = Symbol('hello');

// this allows any data type value to be assigned
const anyDataType: any = 'hello world';

// a safer version than any
// this also allows any data type value to be assigned to the variable
// but operations can be performed only if it is of the intended type
const unknownDataType: unknown = undefined;
if (typeof unknownDataType === "boolean") {
    // do some something
}
if (typeof unknownDataType === "string") {
    // do some string type work
}

/*
Notes!
if you want to quickly make existing javascript code to typescript then use 'any' annotation.
but if you have time to refactor your javascript code then start with 'unknown' annotation.
the 'unknown' annotation will provide you more safety checks.
 */

