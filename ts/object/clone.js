function debounce(func, wait) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      console.log(wait);
      func.apply(context, args);
    }, wait);
  };
}
let deb1 = debounce(() => {
  console.log("11");
}, 1000);
deb1();
deb1();
deb1();
//什么叫函数柯里化？其实就是将使用多个参数的函数转换成一系列使用一个参数的函数的技术。
function add(a, b, c) {
  return a + b + c;
}
add(1, 2, 3);
let addCurry = curry(add);
addCurry(1)(2)(3);

function curry(fn) {
  let judge = (...args) => {
    if (args.length == fn.length) return fn(...args);
    return (...arg) => judge(...args, ...arg);
  };
  return judge;
}
