//接口使用interface作为关键字
interface color {
  name: string; //定义必传属性类型
  value?: number; //问号表示可选属性
  [otherKey: string]: any; //其他额外的属性
}
function createColor(option: color): color {
  console.log(option);

  let newColor = { name: "red", value: 235 };
  option.name && (newColor.name = option.name);
  option.value && (newColor.value = option.value);
  return newColor;
}
console.log(createColor({ name: "green", e: "mfl" } as color)); //color中不包含e，使用类型断言绕开检查，或者color增加其他额外的属性

//接口中的只读属性
interface read {
  readonly name: string;
  readonly value: number;
}
const readExample: read = { name: "rrrrrr", value: 999 };
// readExample.name='mmmmm'//无法分配，接口只读属性
let arr: number[] = [2, 15, 5, 5, 56596]; //或者Array<number>语法
let readArr: ReadonlyArray<number> = arr;
arr[0] = 333;
// readArr.length=33//只读属性无法分配
const newArr = readArr as number[]; //类型断言重写
//函数类型
interface functiongType {
  (name: string, vlaue: number): object;
}
let testFunction: functiongType = function (name, value) {
  return {};
};
testFunction("fsdfm", 26);
//可索引的类型
interface StringArray {
  [index: number]: string | number;
}

let myArray: StringArray = ["Bob", 5555];

let myStr: string | number = myArray[0];
console.log(myStr);
//类
class Greeter {
  greeting: string;
  constructor(message: string) {
      this.greeting = message;
  }
  greet() {
      return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");
