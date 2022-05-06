class Greeter{
    greeter:string
    constructor(value:string){
        this.greeter=value
    }
    logGreeter(){
        console.log(this.greeter);
        return this.greeter
    }
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
let g=new Greeter('gggg')
g.logGreeter()
class example extends Greeter {}
const example1=new example('qqqqq')
example1.logGreeter()
example1.move(999999)
console.log(example1);
//public和private
class Animal{
    public name:string//public关键字，外部可以访问
    private age:number//private关键字，仅内部访问
    protected hobby:string='play'
    constructor(name:string,age:number){
        this.name=name
        this.age=age
        console.log(this.name+'-------'+this.age);
        
    }
}
new Animal('dog',88).name
// new Animal('dog',88).age
// protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问
//只读属性（readonly）必须在声明时或构造函数里被初始化
class AllAnimal extends Animal{
  readonly  work:string='none'
   readonly address:string
    constructor(readonly type:string){//给参数添加修饰符，声明赋值合并一处（readonly、public、private）
        super('eeee',999)
        // console.log(this.age);私有成员无法访问
        console.log(this.hobby);//派生类中调用protected成员
        this.address='hangzhou'
    }
}
const dog=new AllAnimal('声明赋值')
// dog.work='wwwww'
console.log(dog.type);

