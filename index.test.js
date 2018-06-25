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
  expect(a).toEqual([2, 3, 4]);
  //undefined if the array is empty
  const c = array.shift([]);
  expect(c).toEqual(undefined);
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


test('forEach', () => {
  var renameIntoFoo = (currentValue, index, array) => {
    currentValue = 'foo';
  };

  a = [1, 2, 3, 4];

  const b = array.forEach(a, renameIntoFoo);

  expect(b).toEqual(undefined);

});


test('filter', () => {
  var higherThan5 = (currentValue, index, array) => {
    return currentValue > 5;
  }

  const a = [1, 3, 5, 6, 2, 9];
  const b = array.filter(a, higherThan5);
  expect(b).toEqual([6, 9]);

  const c = [1, 2, 3];
  expect(array.filter(c, higherThan5)).toEqual([]);

  var subtract2 = (n) => {
    const res = n - 2;
    console.log(res);
    return res
  }

  const d = array.filter([1, 2, 3], subtract2);
  console.log(d);

  const e = [1, 2, 3].filter(subtract2);
  console.log(e);

  expect(d).toEqual(e);
})
