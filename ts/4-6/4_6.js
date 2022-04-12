//枚举
var front;
(function (front) {
    front[front["age"] = 23] = "age";
    front["name"] = "zj";
    front["job"] = "front-end engineering";
})(front || (front = {}));
var enumKey = front[23]; //根据枚举的值来查找相应的名字
console.log(enumKey);
//类型断言
//类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。
var str = '1';
var str2 = str; //str、str2 是 string 类型
console.log(str2);
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
console.log(greeter(user));
//
function f(input) {
    var a = 100;
    if (input) {
        // Still okay to reference 'a'
        var b = a + 1;
        // return b;
    }
    // Error: 'b' doesn't exist here
    return b;
}
console.log(f(true));
