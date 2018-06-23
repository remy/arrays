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

  const indexNotfound = array.indexOf(a, 10);
  expect(indexNotfound).toBe(-1);
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
  const a = ['a', , 'c'];
  const keys = array.keys(a);
  expect(keys.next().value).toBe(0);
  expect(keys.next().value).toBe(1);
  expect(keys.next().value).toBe(2);
});

test('forEach', () => {
  const a = [1, 2, 3];
  let indexCount = 0;
  let sum = 0;

  array.forEach(a, (value, index, arr) => {
    indexCount++;
    sum += value;
    expect(value).toBe(a[index]);
    expect(arr).toEqual(a);
  });

  expect(indexCount).toBe(3);
  expect(sum).toBe(6);
});

test('join', () => {
  const a = ['a', 'b', 'c'];
  const str = array.join(a);
  expect(typeof str).toBe('string');
  expect(str).toBe('abc');
});

test('findIndex', () => {
  const a = [1, 2, 3, 4, 3];
  const indexFound = array.findIndex(a, (value, index, arr) => {
    expect(value).toBe(a[index]);
    expect(arr).toEqual(a);
    return value === 3;
  });
  expect(indexFound).toBe(2);

  const indexNotfound = array.findIndex(a, (value, index, arr) => {
    expect(value).toBe(a[index]);
    expect(arr).toEqual(a);
    return value === 100;
  });
  expect(indexNotfound).toBe(-1);
});

test('find', () => {
  const a = [1, 2, 3, 4, 3];
  const val = array.find(a, (value, index, arr) => {
    expect(value).toBe(a[index]);
    expect(arr).toEqual(a);
    return index === 3;
  });
  expect(val).toBe(4);

  const valNotfound = array.find(a, (value, index, arr) => {
    expect(value).toBe(a[index]);
    expect(arr).toEqual(a);
    return index === 100;
  });
  expect(valNotfound).toBe(undefined);
});

test('includes', () => {
  const a = [1, 2, 3, 4, 3];
  const val = array.includes(a, 4);
  expect(val).toBe(true);

  const valNotFound = array.includes(a, 10);
  expect(valNotFound).toBe(false);
});
