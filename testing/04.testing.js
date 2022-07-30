setTimeout(() => {
  console.log(4);
}, 50);

setTimeout(() => {
  console.log(1);
}, 0);

console.log(3);

var i = 0;
for (let i = 0; i< 1000; i++) {
  i++;
}

setTimeout(() => {
  console.log(2);
}, 0);


//////

console.log(typeof a);
var a = 123;
function a () {
  return '123';
}