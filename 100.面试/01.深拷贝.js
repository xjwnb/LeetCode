

//
function deepCopy (obj) {
  function isObject (target) {
    return (typeof target === 'object' || typeof target === 'function') && target !== null;
  }

  if (isObject(obj)) {
    return new Error('不是对象');
  }
  
  let newObj = Array.isArray(obj) ? [...obj] : {...obj};

  Reflect.ownKeys(newObj).forEach(key => {
    newObj[key] = isObject(obj[key]) ? deepCopy(obj[key]) : obj[key];
  })
  return newObj;
}