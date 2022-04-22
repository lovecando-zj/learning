//类定义不存在变量提升，且类受块级作用域影响
//构造函数可以忽略不写，默认空函数
//为了在实例间共享方法，类定义语法把在类块中定义的方法作为原型方法。
//类定义也支持获取和设置访问器。语法与行为跟普通对象一样：
class Person {
  constructor(name) {
    this.name = name || "zjjj";
    this.nicknames = ["Jack", "Jake", "J-Dog"];
  }
  // 在类块中定义的所有内容都会定义在类的原型上，相当于在构造函数的原型对象上定义的方法，constructor.prototype.locate=function(){},所有实例对象共享
  locate() {
    console.log("prototype");
  }
  age() {
    console.log("age");
  }
  get() {
    return this.name;
  }
  set na(na) {
    this.name = na;
  }
  static logName() {
    //   console.log(this);
    console.log("static");
    return "8888";
  }
  *[Symbol.iterator]() {
    yield* this.nicknames.entries();
  }
}
let student = new Person("qqq"); //new 的过程就是构造函数实例化的过程，(1) 在内存中创建一个新对象。
//   (2) 这个新对象内部的[[Prototype]]指针被赋值为构造函数的 prototype 属性。[[prototype]]就是内部隐式原型指向构造函数的原型对象
//   (3) 构造函数内部的 this 被赋值为这个新对象（即 this 指向新对象）。
//   (4) 执行构造函数内部的代码（给新对象添加属性）。
//   (5) 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象。
student.newName = "wwwww";
console.log(student.newName);
student.na = "eee";
console.log(student.name);
console.log(Person.logName());
student.age();
student.locate();
console.log(student);
for (let item of student) {
  console.log(item);
}
//继承类和继承构造函数
class NewPerson extends Person {}
let techer = new NewPerson("techer");
console.log(techer);

function leader() {}
// 继承普通构造函数
class Engineer extends leader {}
let e = new Engineer();
console.log(e instanceof Engineer); // true
console.log(e instanceof leader); // true
// 派生类的方法可以通过 super 关键字引用它们的原型。这个关键字只能在派生类中使用，而且仅
// 限于类构造函数、实例方法和静态方法内部。在类构造函数中使用 super 可以调用父类构造函数
//抽象基类，可供其他类继承，但本身不会被实例化
class Vehicle {
  constructor() {
    console.log(new.target); //通过在实例化时检测 new.target 是不是抽象基类，可以阻止对抽象基类的实例化：
    if (new.target === Vehicle) {
      throw new Error("Vehicle cannot be directly instantiated");
    }
    if (!this.foo) {
      throw new Error("Inheriting class must define foo()");
    }
    this.hasEngine = true;
  }
  static identify() {
    console.log("vehicle");
  }
}
class Bus extends Vehicle {
  constructor() {
    // 不要在调用 super()之前引用 this，否则会抛出 ReferenceError
    super(); // 相当于 super.constructor()
    console.log(this instanceof Vehicle); // true
    console.log(this); // Bus { hasEngine: true }
  }
  static identify() {
    super.identify(); //在静态方法中可以通过 super 调用继承的类上定义的静态方法
  }
  foo() {}
}
new Bus();
// new Vehicle();
//类混入
class Mixed {
  constructor(){
    console.log('Mixed');
  }
}
function mixed() {
  console.log("我是混入");
  return Mixed;
}
class extendMixed extends mixed {}
const exp=new extendMixed
new Mixed

