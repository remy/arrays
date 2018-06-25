const array = require('./index');

test('pop', () => {
  const a = [1, 2, 3];
  const result = array.pop(a);
  expect(result).toBe(3);
  expect(a).toEqual([1, 2]);
});

test('push', () => {
  const a = [1, 2];
  const length = array.push(a, 4);
  expect(length).toBe(3);
  expect(a).toEqual([1, 2, 4]);
});

test('reverse', () => {
  const a = [1, 2, 3, 4];
  const b = array.reverse(a);
  expect(b).toEqual([4, 3, 2, 1]);
});

test('shift', () => {
  const a = [1, 2, 3, 4];
  const b = array.shift(a);
  expect(b).toEqual(1);
  // expect(a).toEqual([2, 3, 4]);
  //undefined if the array is empty
});


test('slice - start is higher than array.length', () => {
  const a = [1, 2, 3];
  const b = array.slice(a, 3);
  expect(b).toEqual([]);
});

test('slice - no start no end', () => {
  const a = [1, 2, 3];
  const b = array.slice(a);
  expect(b).toEqual([1, 2, 3]);
});

test('slice - passing an empty string for start and end', () => {
  const a = [1, 2, 3];
  const b = array.slice(a, '', '');
  expect(b).toEqual([1, 2, 3]);
});

test('slice - padding start and end', () => {
  const a = [1, 2, 3];
  const b = array.slice(a, 1, 3);
  expect(b).toEqual([2, 3]);
});

test('slice - passing only start', () => {
  const a = [1, 2, 3];
  const b = array.slice(a, 1);
  expect(b).toEqual([2, 3]);
});


test('some', () => {
  const a = [1, 2, 3];

  function findTwo(currentValue, index, array) {
    return currentValue === 2;
  }

  const b = array.some(a, findTwo);
  expect(b).toEqual(true);

});

test('some - not found', () => { // can be many or none

  const a = [1, 2, 3];

  function notFound(currentValue, index, array) {
    return currentValue === 5;
  }

  const b = array.some(a, notFound);
  expect(b).toEqual(false);

  const c = array.some(a, currentValue => currentValue === 5);
  expect(c).toEqual(false);
});
