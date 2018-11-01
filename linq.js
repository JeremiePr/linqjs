Array.prototype.select = function(callback = e => e) {
  
  if (typeof(callback) !== "function") {
    throw new Error(`Expected a function, got a ${typeof(callback)}`);
  }
  
  let out = [];
  this.forEach(e => {
    out.push(callback(e));
  });

  return out;
}

Array.prototype.selectMany = function(callback = e => e) {

  if (typeof (callback) !== "function") {
    throw new Error(`Expected a function, got a ${typeof (callback)}`);
  }

  let out = [];
  this.forEach(e => {
    callback(e).forEach(e2 => {
      out.push(e2);
    });
  });

  return out;
}

Array.prototype.where = function(callback = e => true) {

  if (typeof (callback) !== "function") {
    throw new Error(`Expected a function, got a ${typeof (callback)}`);
  }

  let out = [];
  this.forEach(e => {
    if(callback(e)) {
      out.push(e);
    }
  });

  return out;
}

Array.prototype.all = function(callback = e => true) {

  if (typeof (callback) !== "function") {
    throw new Error(`Expected a function, got a ${typeof (callback)}`);
  }

  for(let i = 0; i < this.length; i ++) {
    let e = this[i];
    if(!callback(e)) {
      return false;
    }
  }

  return true;
}

Array.prototype.any = function(callback = e => true) {

  if (typeof (callback) !== "function") {
    throw new Error(`Expected a function, got a ${typeof (callback)}`);
  }

  for (let i = 0; i < this.length; i++) {
    let e = this[i];
    if (callback(e)) {
      return true;
    }
  }

  return false;
}

Array.prototype.contains = function(element) {

  if(!element) {
    throw new Error(`Expected 1 argument as object, got 0`);
  }

  for (let i = 0; i < this.length; i++) {
    let e = this[i];
    if (element === e) {
      return true;
    }
  }

  return false;

}

Array.prototype.orderBy = function(callback = e => e) {

  if (typeof (callback) !== "function") {
    throw new Error(`Expected a function, got a ${typeof (callback)}`);
  }

  let out = [];
  this.forEach(e => {
    out.push(e);
  });
  out.sort((a, b) => {
    let diff = callback(a) - callback(b);
    if(diff < 0) {
      return -1;
    }
    if(diff > 0) {
      return 1;
    }
    return 0;
  });

  return out;
}

Array.prototype.orderByDescending = function(callback = e => e) {

  if (typeof (callback) !== "function") {
    throw new Error(`Expected a function, got a ${typeof (callback)}`);
  }

  let out = [];
  this.forEach(e => {
    out.push(e);
  });
  out.sort((a, b) => {
    let diff = callback(a) - callback(b);
    if (diff < 0) {
      return 1;
    }
    if (diff > 0) {
      return -1;
    }
    return 0;
  });

  return out;
}

Array.prototype.count = function() {

    return this.length;
}

Array.prototype.skip = function(n) {

    if (typeof (n) !== "number") {
        throw new Error(`Expected a number, got a ${typeof(n)}`);
    }

    let out = [];
    for(let i = n; i < this.length; i ++) {
        let e = this[i];
        out.push(e);
    }

    return out;
}

Array.prototype.take = function(n) {

    if (typeof (n) !== "number") {
        throw new Error(`Expected a number, got a ${typeof (n)}`);
    }

    let out = [];
    for(let i = 0; i < n; i ++) {
        let e = this[i];
        out.push(e);
    }
    
    return out;
}