export function partition(size, coll) {
  var res = [];
  for (var i = 0, l = coll.size || coll.length; i < l; i += size) {
    res.push(coll.slice(i, i + size));
  }
  return res;
}

export function assign(target, ...sources) {
  return sources.reduce((t, obj) => {
    return Object.keys(obj).reduce((res, prop) => {
      res[prop] = obj[prop];
      return res;
    }, t);
  }, target);
}
