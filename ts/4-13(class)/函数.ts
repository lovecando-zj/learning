//匿名函数完整类型,必须指定函数返回类型，没有写viod不能为空
let add: (a: number, b: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
//推断类型，此处为按上下文推论，是类型推论的一种,检查参数个数是否一致
//可选参数必须在必选参数之后,
let add1: (a: number, b?: number) => number = function (q, w) {
  return w ? q + w : q;
};

//默认初始化参数都是可选的,
function name1(c: number, m: string = "可选"): void {}
name1(88888);
//剩余参数
function rest(q: string, ...restArr: number[]): void {}
rest("fff", 88, 8, 8, 8, 8);

//用接口指定this调用类型
interface Desk {
  suits: string[];
  cards: number[];
  createCardPicker(this: Desk): () => { suit: string; card: number };
}
let deck: Desk = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function (this: Desk) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

//this参数在回调函数里
interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}
class Handler {
  info: string='';
  onClickBad(this: Handler, e: Event) {
      // oops, used this here. using this callback would crash at runtime
      // this.info = e.message;
  }
}
let h = new Handler();
let uiElement:UIElement={
  addClickListener(onclick: (this: void, e: Event) => void):void{
    // onclick()
  }
}
// uiElement.addClickListener(h.onClickBad); // error!