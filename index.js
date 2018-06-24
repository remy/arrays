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

function reverse(array) {
  const newArray = []; //wrote this as array(), getting confused with PHP;
  for (let i = (array.length-1); i >= 0; i--){ //created infinite loop and issue with i being > than 0 rather than <: for (let i = (array.length-1); i <= array.length; i--){
    newArray.push(array[i]);
  }
  return newArray;
}

function shift(array) {
  if(array.length > 0){
    array.length = array.length - 1; //didn't know how to reduce the length. I looked a the example in pop
    return array[0];
  }else{
    return undefined;
  }
}

/**
The slice() method returns a shallow copy of a portion of an array into a new array
object selected from begin to end (end not included). The original array will not be modified.
**/
function slice(array, start, end) {
  //had to google parseInt to remember how it's called; //also don't know all bases!
  const newArray = [];
  if (typeof start === 'undefined' || start === ''){ // could't remember how to check for undefined: if (start == undefined){
    start = 0; //if here I wrote let start = 0 it then would still be undefined?
  }
  start = parseInt(start,10);
  if ( start > (array.length -1) ){
    return newArray;
  }
  if (typeof end === 'undefined' || end === ''){
    end = (array.length);
  }
  end = parseInt(end, 10);
  for (let i = start; i <= (end - 1); i++){
    newArray.push(array[i]);
  }
  return newArray;
}

function some(array, element) {
  canFindElement = false;
  for( let i = 0; i < array.length; i++){
    if(array[i] === element){
      canFindElement = true;
    }
  }
  return canFindElement;
}

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
