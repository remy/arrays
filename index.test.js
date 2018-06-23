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

test('indexOf', () => {
  const a = [1, 2, 3, 4, 3];
  const index = array.indexOf(a, 3);
  expect(index).toBe(2);
});

test('lastIndexOf', () => {
  const a = [1, 2, 3, 4, 3];
  const index = array.lastIndexOf(a, 3);
  expect(index).toBe(4);
});

test('map', () => {
  const a = [1, 2, 3];
  const mappedArray = array.map(a, (value, index) => {
    return value * 2;
  });
  expect(mappedArray.length).toBe(3);
  expect(mappedArray).toEqual([2, 4, 6]);
});

test('keys', () => {
  var arr = ['a', , 'c'];
  var keys = array.keys(arr);
  expect(keys.next().value).toBe(0);
  expect(keys.next().value).toBe(1);
  expect(keys.next().value).toBe(2);
});
