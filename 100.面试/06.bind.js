function myBind(context) {
  if (typeof context === "undefined" || context === null) {
    context = window;
  }

  let _this = this;

  let arg = [].slice(1);

  return function (...args) {
    return _this.apply(context, args.concat(args));
  };
}
