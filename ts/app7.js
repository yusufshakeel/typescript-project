//simple generic
function simpleGeneric(data) {
    return data;
}
console.log(simpleGeneric("Yusuf"));
console.log(simpleGeneric(100));
console.log(simpleGeneric({ name: "Yusuf", score: 100 }));
// generic
function betterGeneric(data) {
    return data;
}
console.log(betterGeneric("Yusuf"));
console.log(betterGeneric(100));
console.log(betterGeneric({ name: "Yusuf", score: 100 }));
//built in generic
var myNumbers = [1, 2, 3];
myNumbers.push(4);
console.log(myNumbers);
//arrays
function printAll(args) {
    args.forEach(function (elem) { return console.log(elem); });
}
printAll([1, 2, 3]);
// generic type
var generic1 = betterGeneric;
console.log(generic1("Yusuf"));
// generic class
var myAddClass = (function () {
    function myAddClass() {
    }
    myAddClass.prototype.disp = function () {
        return +this.x + +this.y;
    };
    return myAddClass;
}());
var myAddClassObj = new myAddClass();
myAddClassObj.x = "10";
myAddClassObj.y = "20";
console.log(myAddClassObj.disp());
var myAddClass2 = (function () {
    function myAddClass2() {
    }
    myAddClass2.prototype.disp = function () {
        return +this.x + +this.y;
    };
    return myAddClass2;
}());
var myAddClassObj2 = new myAddClass2();
myAddClassObj2.x = "10";
myAddClassObj2.y = 20;
console.log(myAddClassObj2.disp());
