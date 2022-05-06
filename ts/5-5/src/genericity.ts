//泛型及其类型推断
function example<t, q>(name: t, age: q): q {
  //定义泛型名称为t，q
  return age;
}
example("888", 888); //此处类型推论t,q为string，number
example<number, string>(99, "99"); //此处指定类型
function example2<t>(n:t,q:t):t{
    return n
}
example2<string|number>('999',999)//此处指定类型
//泛型接口
interface genericity {
  <f>(n: f): f;
}
//泛型约束
function test<t>(arr: t[]): t[] {
  //定义参数中必须含有length属性，可定义数组实现约束
  console.log(arr.length);
  return arr;
}
interface len {
  length: number;
  name: string;
}
function test2<t extends len>(n: t): t {
  //定义接口使用extends关键字约束
  console.log(n.length + n.name);
  return n;
}
//
//泛型类
class MinClass<T> {
  public list: T[] = [];
  add(value: T): void {
    this.list.push(value);
  }
  min(): T {
    let minNum = this.list[0];
    for (let e of this.list) {
      if (minNum > e) {
        minNum = e;
      }
    }
    return minNum;
  }
}

// 制定类的代表类型是number
let m = new MinClass<number>(); //实例化类，并且制定了类的代表类型是number
m.add(5);
m.add(9);
m.add(12);
m.add(4);
console.log(m.list);
console.log(m.min());
