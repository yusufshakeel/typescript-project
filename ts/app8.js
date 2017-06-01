var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// decorators
function logged(constructorFn) {
    console.log(constructorFn);
}
var sampleClassWithDecorator = (function () {
    function sampleClassWithDecorator() {
        console.log("Hi");
    }
    return sampleClassWithDecorator;
}());
sampleClassWithDecorator = __decorate([
    logged
], sampleClassWithDecorator);
//factory
function logging(value) {
    return value ? logged : null;
}
var AnotherClass = (function () {
    function AnotherClass() {
    }
    return AnotherClass;
}());
AnotherClass = __decorate([
    logging(false)
], AnotherClass);
