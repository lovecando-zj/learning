//never 表示永不存在值类型
interface Circle {
  radius: number;
  kind: "er";
}
interface react {
  kind: "eee";
}
function ww(): never {
  throw "error";
}
function qq(qq: Circle | react) {
  switch (qq.kind) {
    case "er":
      return "ggg";
    case "eee":
      return "ffff";
    default:
      // console.log(qq);
      const q: never = qq;
      return q;
  }
}
console.log(22222);

qq({ kind: "er", radius: 999 });
