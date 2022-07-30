let queue = [];
queue.push((next) => {
  console.log(1);
  next();
  console.Log(1.1);
});
queue.push((next) => {
  console.log(2);
  next();
  console.log(2.1);
});
queue.push((next) => {
  console.log(3);
  next();
  console.log(3.1);
});
let fn = compose(queue);
fn();


// 1/ 实现compose使得输出为 1 2 3 3.1 2.1 1.1

const isArray = (arr) => {
  return Object.prototype.toString.call(arr) === '[object Array]';
}
function compose(arr) {
  if (!isArray(arr)) {
    return new Error("compose 参数必须是一个数组");
  }
  function next () {
    setTimeout(() => {
      
    }, 10);
  }
}
