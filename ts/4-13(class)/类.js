var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = /** @class */ (function () {
    function Greeter(value) {
        this.greeter = value;
    }
    Greeter.prototype.logGreeter = function () {
        console.log(this.greeter);
        return this.greeter;
    };
    Greeter.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved ".concat(distanceInMeters, "m."));
    };
    return Greeter;
}());
var g = new Greeter('gggg');
g.logGreeter();
var example = /** @class */ (function (_super) {
    __extends(example, _super);
    function example() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return example;
}(Greeter));
var example1 = new example('qqqqq');
example1.logGreeter();
example1.move(999999);
console.log(example1);
//public和private
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.hobby = 'play';
        this.name = name;
        this.age = age;
        console.log(this.name + '-------' + this.age);
    }
    return Animal;
}());
new Animal('dog', 88).name;
// new Animal('dog',88).age
// protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问
//只读属性（readonly）必须在声明时或构造函数里被初始化
var AllAnimal = /** @class */ (function (_super) {
    __extends(AllAnimal, _super);
    function AllAnimal(type) {
        var _this = _super.call(this, 'eeee', 999) || this;
        _this.type = type;
        _this.work = 'none';
        // console.log(this.age);私有成员无法访问
        console.log(_this.hobby); //派生类中调用protected成员
        _this.address = 'hangzhou';
        return _this;
    }
    return AllAnimal;
}(Animal));
var dog = new AllAnimal('声明赋值');
// dog.work='wwwww'
console.log(dog.type);
