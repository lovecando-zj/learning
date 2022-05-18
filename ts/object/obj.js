function Created(age) {
  this.name = "lllll";
  this.age = age;
}
Created.prototype.job = "kkkk";

const zjjj = new Created(5555);
// console.log(zjjj);
Object.defineProperty(zjjj, "name", {
    Configurable:true,//表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特性，以及是否可以把它改为访问器属性，默认情况下，所有直接定义在对象上的属性该特性都为true
  enumerable: false,//表示属性是否可以通过 for-in 循环返回，默认情况下，所有直接定义在对象上的属性该特性都为true
});
for (let i in zjjj) {
  console.log('1.'+i);
}
function extendCreate(age,hobby){
    Created.call(this,age)
    this.hooby=hobby
}
extendCreate.prototype=new Created()//此处可以清楚的看到原型链继承，原型对象是另一实例，传参不便且实例属性和原型属性混乱
const qwww=new extendCreate(666,'aaa')
console.log(qwww);
 console.log(extendCreate.prototype);
for (const key in qwww) {
   console.log('2.'+key);
}
//上文提到组合式继承中的原型继承可以只继承
