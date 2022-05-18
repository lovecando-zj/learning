//数字枚举
enum res {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: res): void {
    console.log(message);
    
    // ...
}

respond("Princess Caroline", res.Yes)
//字符串枚举
enum str{
    a='wwww',
    b='kkkkkk'

}
//异构枚举
enum yg{
    num=555,
    str='kkkkk'
}

enum FileAccess {
    // constant members
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    // computed member
    G = "123".length
}
//联合枚举与枚举成员的类型
enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let c: Circle = {
    kind: ShapeKind.Circle,
    //    ~~~~~~~~~~~~~~~~ Error!
    radius: 100,
}
// 除了创建一个以属性名做为对象成员的对象之外，数字枚举成员还具有了 反向映射，从枚举值到枚举名字。 例如，在下面的例子中
enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"