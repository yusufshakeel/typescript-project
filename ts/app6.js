function printPersonName(person) {
    console.log(person.name);
}
var person1 = {
    name: "Yusuf Shakeel",
    score: 50,
    greet: function (message) {
        console.log("Hello, " + this.name + "! " + "You have a message: " + message);
    }
};
printPersonName(person1);
person1.greet("123");
//class implements interface
var SomePerson = (function () {
    function SomePerson() {
    }
    SomePerson.prototype.greet = function (message) {
        console.log("Hello, " + this.name + "! " + "You have a message: " + message);
    };
    return SomePerson;
}());
var someperson1 = new SomePerson();
someperson1.name = "Yusuf Shakeel";
someperson1.greet("123");
var someAddValueFun = function (num1, num2) {
    return num1 + num2;
};
console.log(someAddValueFun(10, 20));
