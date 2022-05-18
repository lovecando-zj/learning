//函数类型
type typeFunction = (a: string) => void;
function qw(q: typeFunction) {
  q("ggg");
}
qw((q) => {
  console.log(q);
});
//调用签名
type func = {
  name: string;
  (n: number): void;
};
function qa(fun: func) {
  console.log(fun.name + fun(99));
}
qa((q) => q);
//构造签名
interface cons {
  (f: number): void;
  new (n: string): void;
}
function qwq(fn: cons) {
  let q = new fn("lll");
  let w = fn(55555);
}
//函数重载
function heavy(obj: number): number;
// function heavy(x: number, y: string): number;
function heavy(
  obj: number,
  x?: number,
  y?: string
): number  {
  return 0;
}


