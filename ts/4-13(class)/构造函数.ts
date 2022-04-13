interface type {
  name: string;
  age: number;
  job: string;
}
function common(obj: type): object {
  let newObj: { [key: string]: any } = {};
  newObj.name = obj.name;
  newObj.age = obj.age;
  newObj.job = obj.job;
  newObj.method = function() {
    console.log(this);
  };
  return newObj;
}
common({ name: "wqw", age: 565, job: "dfer" });

