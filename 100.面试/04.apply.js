

function myApply(context) {
  if (typeof context === 'undefined' ||  context ===  null) {
    context = window;
  }

  let key = Symbol();
  context[key] = this;
  // apply 这里第二个参数是数组
  let args = [...arguments].slice(1);

  let result = context[key](...args);
  delete context[key]
  return result;
}