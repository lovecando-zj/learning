function common(obj) {
    var newObj = {};
    newObj.name = obj.name;
    newObj.age = obj.age;
    newObj.job = obj.job;
    newObj.method = function () {
        console.log(this);
    };
    return newObj;
}
common({ name: "wqw", age: 565, job: "dfer" });
