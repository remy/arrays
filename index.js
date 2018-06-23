function concat(array) {}

function copyWithin(array) {}

function entries(array) {}

function every(array) {}

function fill(array) {}

function filter(array) {}

function find(array) {}

function findIndex(array) {}

function forEach(array) {}

function includes(array) {}

function indexOf(array) {}

function join(array) {}

function keys(array) {}

function lastIndexOf(array) {}

function map(array) {}

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
