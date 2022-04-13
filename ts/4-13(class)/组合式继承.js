//组合继承

//原来的构造函数
function Original(name) {
  this.name = name || "zj";
  this.age = 18;
}
//original构造函数原型对象上的方法
Original.prototype.logName = function () {
  console.log(this.name);
};
//盗用构造函数来继承原来的构造函数
function Extend(job, name) {
  Original.call(this, name); //改变original的this指向为Extend实例化的对象来实现属性的继承
  this.job = job; //name为继承的属性必填，job为新增自定义属性
}

//原型式继承方法
Extend.prototype = new Original();//确保是最新的实例化对象
console.log(new Original());
Extend.prototype.logAge = function () {
  console.log(this.age);
};
//实例化调用
// let originalZj = new Original("qwww");
let ExtendZj = new Extend("无业游民", "zjjjj");
console.log(ExtendZj);
ExtendZj.logName(); //继承Original的方法
ExtendZj.logAge(); //自定义的新方法
//就这？