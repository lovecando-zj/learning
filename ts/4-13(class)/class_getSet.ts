let passcode = "secret passcode";
//只带有 get不带有 set的存取器自动被推断为 readonly
class Employee {
  private _fullName: string = "";

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
console.log(employee.fullName);
//abstract关键字定义抽象基类
abstract class Base {
  abstract makeSound(): void; //此处抽象方法必须实现
  move(): void {
    console.log("roaming the earch...");
  }
}
//抽象类方法必须在派生类中实现
class Inherit extends Base {
  makeSound(): void {
    console.log("实现抽象方法");
  }
  error(){
    console.log('抽象基类中未定义的方法');
    
  }
}
let department:Base;// 允许创建一个对抽象类型的引用
  department=new Inherit 
//  department.error()//类型Base上不存在error方法

//由于类可以创建出类型，所以类可以当做接口使用
 class Point {
  x: number=0;
  y: number=0;
} 

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
