//匿名函数完整类型,必须指定函数返回类型，没有写viod不能为空
var add = function (x, y) {
    return x + y;
};
//推断类型，此处为按上下文推论，是类型推论的一种,检查参数个数是否一致
//可选参数必须在必选参数之后,
var add1 = function (q, w) {
    return w ? q + w : q;
};
//默认初始化参数都是可选的,
function name1(c, m) {
    if (m === void 0) { m = "可选"; }
}
name1(88888);
//剩余参数
function rest(q) {
    var restArr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restArr[_i - 1] = arguments[_i];
    }
}
rest("fff", 88, 8, 8, 8, 8);
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
//this参数在回调函数里
