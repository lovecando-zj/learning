//实现添加

//发布者
class publisher {
  observerList = [];
  //添加成员
  addObserver(observer) {
      this.observerList.push(observer)
  }
//发布任务
  publish(task){
    this.observerList.forEach(item=>item.update(task))
  }
}
//观察者
class observer {

    constructor(name){
      this.name=name
    }
    update(message){
        console.log(this.name+'接收'+message+'任务');
    }
}
const observer1=new publisher
console.log(observer1.observerList);
observer1.addObserver(new observer('观察者1'))
observer1.addObserver(new observer('观察者2'))
observer1.publish('连更100天')

