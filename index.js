function concat(array, array2) {
  const result = [];

  for (let i = 0; i < arguments.length; i++) {
    const a = arguments[i];

    for (var j = 0; j < a.length || 0; j++) {
      result[result.length] = a[j];
    }
  }

  return result;
}

function copyWithin(array, target, startIndex, endIndex) {
  target = target || 0;
  startIndex = startIndex || 0;
  endIndex = endIndex || length;

  if (!array[target]) return;

  if (target < 0) {
    target += length;
  }

  if (startIndex < 0) {
    startIndex += length;
  }

  if (endIndex < 0) {
    endIndex += length;
  }

  for (let i = startIndex; i < endIndex; i++) {
    array[target] = array[i];
  }

  return array;
}

function entries(array) {
  const indexes = [];

  function makeIterator(array) {
    let nextIndex = 0;

    return {
      next: function() {
        return nextIndex < array.length
          ? { value: array[nextIndex++], done: false }
          : { done: true };
      },
    };
  }

  for (let i = 0; i < array.length; i++) {
    indexes[i] = [i, array[i]];
  }

  return makeIterator(indexes);
}

function every(array, cb) {
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (!cb(value, i, array)) return false;
  }

  return true;
}

function fill(array, value, startIndex, endIndex) {
  const newArray = [];
  const length = array.length;

  startIndex = startIndex || 0;
  endIndex = endIndex || length;

  if (startIndex < 0) {
    startIndex += length;
  }

  if (endIndex < 0) {
    endIndex += length;
  }

  for (let i = 0; i < length; i++) {
    if (i >= startIndex && i < endIndex) {
      newArray[i] = value;
    } else {
      newArray[i] = array[i];
    }
  }

  return newArray;
}

function filter(array, cb) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (cb(value, i, array)) newArray[newArray.length] = value;
  }

  return newArray;
}

function find(array, cb) {
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (cb(value, i, array)) return value;
  }

  return undefined;
}

function findIndex(array, cb) {
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) return i;
  }

  return -1;
}

function forEach(array, cb) {
  for (let i = 0; i < array.length; i++) {
    cb(array[i], i, array);
  }
}

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) return true;
  }
  return false;
}

function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) return i;
  }

  return -1;
}

function join(array, str) {
  str = str || ',';
  let result = '';

  for (let i = 0; i < array.length; i++) {
    result += array[i].toString();
    if (i < array.length - 1) {
      result += str;
    }
  }

  return result;
}

function keys(array) {
  const indexes = [];

  function makeIterator(array) {
    let nextIndex = 0;

    return {
      next: function() {
        return nextIndex < array.length
          ? { value: array[nextIndex++], done: false }
          : { done: true };
      },
    };
  }

  for (let i = 0; i < array.length; i++) {
    indexes[i] = i;
  }

  return makeIterator(indexes);
}

function lastIndexOf(array, value) {
  let index = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) index = i;
  }

  return index;
}

function map(array, cb) {
  for (let i = 0; i < array.length; i++) {
    array[i] = cb(array[i], i, array);
  }

  return array;
}

function pop(array) {
  const res = array[array.length - 1];
  array.length = array.length - 1;
  return res;
}

function push(array, value) {
  const length = array.length;
  array[length] = value;
  return length + 1;
}

function reduce(array) {}

function reduceRight(array) {}

function reverse(array) {}

function shift(array) {}

function slice(array) {}

function some(array, cb) {
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (cb(value, i, array)) return true;
  }

  return false;
}

function sort(array) {}

function splice(array) {}

function toLocaleString(array) {
  const str = ',';
  let result = '';

  for (let i = 0; i < array.length; i++) {
    result += array[i].toLocaleString();
    if (i < array.length - 1) {
      result += str;
    }
  }

  return result;
}

function toSource(array) {}

function toString(array) {
  const str = ',';
  let result = '';

  for (let i = 0; i < array.length; i++) {
    result += array[i].toString();
    if (i < array.length - 1) {
      result += str;
    }
  }

  return result;
}

function unshift(array) {}

function values(array) {
  const values = [];

  function makeIterator(array) {
    let nextIndex = 0;

    return {
      next: function() {
        return nextIndex < array.length
          ? { value: array[nextIndex++], done: false }
          : { done: true };
      },
    };
  }

  for (let i = 0; i < array.length; i++) {
    values[i] = array[i];
  }

  return makeIterator(values);
}

module.exports = {
  concat,
  copyWithin,
  entries,
  every,
  fill,
  filter,
  find,
  findIndex,
  forEach,
  includes,
  indexOf,
  join,
  keys,
  lastIndexOf,
  map,
  pop,
  push,
  reduce,
  reduceRight,
  reverse,
  shift,
  slice,
  some,
  sort,
  splice,
  toLocaleString,
  toSource,
  toString,
  unshift,
  values,
};
