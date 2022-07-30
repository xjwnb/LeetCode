function create() {
  let obj = {};
  let con = [].shift.call(arguments);
  obj.__proto__ = con.prototype;
  let result = con.call(obj, arguments);
  return result instanceof Object ? result : obj;
}
