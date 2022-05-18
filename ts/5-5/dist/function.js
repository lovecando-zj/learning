"use strict";
function qw(q) {
    q("ggg");
}
qw((q) => {
    console.log(q);
});
function qa(fun) {
    console.log(fun.name + fun(99));
}
qa((q) => q);
function qwq(fn) {
    let q = new fn("lll");
    let w = fn(55555);
}
// function heavy(x: number, y: string): number;
function heavy(obj, x, y) {
    return 0;
}
