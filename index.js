function concat(array) {}

function copyWithin(array) {}

function entries(array) {}

function every(array, cb) {
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (!cb(value, i, array)) return false;
  }

  return true;
}

function fill(array) {}

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

function join(array) {
  let result = '';

  for (let i = 0; i < array.length; i++) {
    result += array[i];
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

function some(array) {}

function sort(array) {}

function splice(array) {}

function toLocaleString(array) {}

function toSource(array) {}

function toString(array) {}

function unshift(array) {}

function values(array) {}

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
