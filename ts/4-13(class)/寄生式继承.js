function createAnother(original) {
  let clone = object(original); // 通过调用函数创建一个新对象,自定义一个深拷贝函数名为object
  clone.sayHi = function () {
    // 以某种方式增强这个对象
    console.log("hi");
  };
  return clone; // 返回这个对象
}
let person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"],
};
let anotherPerson = createAnother(person);
console.log(anotherPerson);
anotherPerson.sayHi(); // "hi"
console.log(anotherPerson.constructor === createAnother);
//名为object的深拷贝函数
function object(obj) {
  let newObj;
  if (obj instanceof Object) {
    newObj = obj instanceof Array ? [] : {};
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        newObj[key] = obj[key] instanceof Object ? object(obj[key]) : obj[key];
      }
    }
  } else {
    newObj = obj;
  }
  return newObj;
}

//寄生式组合继承
function inheritPrototype(subType, superType) {
  let prototype = object(superType.prototype); // 创建对象
  prototype.constructor = subType; // 增强对象
  subType.prototype = prototype; // 赋值对象
}
function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
  console.log(this.name);
};

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function () {
  console.log(this.age);
};
let 
