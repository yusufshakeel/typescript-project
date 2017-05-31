// class
var Person = (function () {
    //constructor
    //the second parameter will create a public property username
    //and also assign value passed to the constructor
    function Person(name, username) {
        this.username = username;
        //this is protected property and accessible from inside this class
        //and from any class that inherits this class
        this.accountStatus = "ACTIVE";
        this.name = name;
    }
    //methods
    Person.prototype.setScore = function (score) {
        this.score = score;
    };
    Person.prototype.getScore = function () {
        return this.score;
    };
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.setAccountStatus = function (status) {
        this.accountStatus = status;
    };
    return Person;
}());
//creating object of the class
var person = new Person("Yusuf Shakeel", "yusufshakeel");
console.log(person);
person.setScore(10);
person.setAddress("Some sample address");
person.setAccountStatus("ACTIVE");
console.log(person);
