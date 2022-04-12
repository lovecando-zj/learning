function createColor(option) {
    console.log(option);
    var newColor = { name: "red", value: 235 };
    option.name && (newColor.name = option.name);
    option.value && (newColor.value = option.value);
    return newColor;
}
console.log(createColor({ name: "green", e: "mfl" }));
var readExample = { name: "rrrrrr", value: 999 };
// readExample.name='mmmmm'//无法分配，接口只读属性
var arr = [2, 15, 5, 5, 56596]; //或者Array<number>语法
var readArr = arr;
arr[0] = 333;
// readArr.length=33//只读属性无法分配
var newArr = readArr; //类型断言重写
