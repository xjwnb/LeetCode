function curry(fn, args) {
  if (!(fn instanceof Function)) throw new Error("第一个参数需要是函数");
  let length = fn.length;
  args = args || [];

  return function () {
    let _args = args.slice(0);
    for (let i = 0; i < arguments.length; i++) {
      _args.push(arguments[i]);
    }

    if (_args.length < length) {
      return curry.call(this, fn, _args);
    } else {
      return fn.apply(this, _args);
    }
  };
}

var fn = curry(function (a, b, c) {
  console.log([a, b, c]);
});

fn("a", "b", "c");
fn("a")("b")("c");
