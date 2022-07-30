

function myCall (context, ...args) {
  if (typeof context === 'undefined' || context === null) {
    context = window;
  }

  let key = Symbol();
  context[key] = this;
  let result = context[key](...args);
  delete context[key];
  return result;
}