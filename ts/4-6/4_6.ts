//枚举
enum front {
    age=23,
    name='zj',
    job='front-end engineering'
}
let enumKey:string=front[23]//根据枚举的值来查找相应的名字
console.log(enumKey);


//类型断言
//类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。
var str = '1' 
var str2:number =<number> <any> str   //str、str2 是 string 类型
console.log(str2)
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

console.log(greeter(user));
//温故而知新
function f(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
      let   b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    // return b;
}
console.log(f(true));
//接口'?'表示可选属性
interface work{
    age?:number,
    address:string,
    [key:string]:any
}
const obj:work={
    age:555,
    address:'fddesfs',
    qwwq:'dfgjek'
}
