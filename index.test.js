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
  expect(a.indexOf(3)).toBe(array.indexOf(a, 3));
  expect(a.indexOf(10)).toBe(array.indexOf(a, 10));
});

test('lastIndexOf', () => {
  const a = [1, 2, 3, 4, 3];
  expect(a.lastIndexOf(3)).toBe(array.lastIndexOf(a, 3));
  expect(a.lastIndexOf(10)).toBe(array.lastIndexOf(a, 10));
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
  expect(a.join()).toBe(array.join(a));
  expect(a.join(',')).toBe(array.join(a, ','));
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
  expect(a.includes(2)).toBe(array.includes(a, 2));
  expect(a.includes(10)).toBe(array.includes(a, 10));
});

test('filter', () => {
  const a = [1, 2, 3, 4, 5];
  const filtered = array.filter(a, (value, index, arr) => {
    expect(value).toBe(a[index]);
    expect(arr).toEqual(a);
    return value % 2 == 0;
  });

  expect(filtered).toEqual([2, 4]);
});

test('every', () => {
  const a = [1, 2, 3, 4, 5];
  const result = array.every(a, (value, index, arr) => {
    expect(value).toBe(a[index]);
    expect(arr).toEqual(a);
    return value !== 0;
  });
  expect(result).toBe(true);

  const resultPass = array.every(a, (value, index, arr) => {
    expect(value).toBe(a[index]);
    expect(arr).toEqual(a);
    return value > 0;
  });
  expect(resultPass).toBe(true);

  const resultEmpty = array.every([], (value, index, arr) => {
    expect(value).toBe(a[index]);
    expect(arr).toEqual(a);
    return value < 99;
  });
  expect(resultEmpty).toBe(true);
});

test('fill', () => {
  const a = [1, 2, 3, 4, 5];
  expect(array.fill(a, 9)).toEqual(a.fill(9));
  expect(array.fill(a, 9, 0, 5)).toEqual(a.fill(9, 0, 5));
  expect(array.fill(a, 9, 1, 2)).toEqual(a.fill(9, 1, 2));
  expect(array.fill(a, 9, 2)).toEqual(a.fill(9, 2));
  expect(array.fill(a, 9, -4, -1)).toEqual(a.fill(9, -4, -1));
});

test('entries', () => {
  const a = ['a', , 'c'];
  const keys = array.entries(a);
  expect(keys.next().value).toEqual([0, 'a']);
  expect(keys.next().value).toEqual([1, ,]);
  expect(keys.next().value).toEqual([2, 'c']);
});

test('copyWithin', () => {
  const a = [1, 2, 3, 4, 5];
  array.copyWithin(a, 4, 0, 1);

  expect(a).toEqual([1, 2, 3, 4, 1]);
  expect(array.copyWithin(a, 3)).toBe(a.copyWithin(3));
});

test('concat', () => {
  const a = [1, 2, 3, 4, 5];
  const b = [6, 7, 8, 9, 10];
  expect(array.concat(a, b)).toEqual(a.concat(b));
});

test('values', () => {
  const a = ['a', , 'c'];
  const values = array.values(a);
  expect(values.next().value).toBe('a');
  expect(values.next().value).toBe();
  expect(values.next().value).toBe('c');
});

test('toString', () => {
  const a = ['a', 'b', 'c'];
  expect(a.toString()).toBe(array.toString(a));
});

test('toLocaleString', () => {
  const a = ['a', 'b', 'c'];
  expect(a.toLocaleString()).toBe(array.toLocaleString(a));
});

test('some', () => {
  const a = [1, 2, 3, 4, 5];
  const result = array.some(a, (value, index, arr) => {
    expect(value).toBe(a[index]);
    expect(arr).toEqual(a);
    return value !== 0;
  });
  expect(result).toBe(true);

  const resultPass = array.some(a, (value, index, arr) => {
    expect(value).toBe(a[index]);
    expect(arr).toEqual(a);
    return value > 0;
  });
  expect(resultPass).toBe(true);

  const resultEmpty = array.some([], (value, index, arr) => {
    expect(value).toBe(a[index]);
    expect(arr).toEqual(a);
    return value < 99;
  });
  expect(resultEmpty).toBe(false);
});

test('shift', () => {
  const a = [1, 2, 3];

  expect(array.shift(a)).toBe(a.shift());
});

test('unshift', () => {
  const a = [1, 2, 3];

  expect(array.unshift(a, 4)).toBe(a.unshift(4));
  expect(array.unshift(a, 4).length).toBe(a.unshift(4).length);
});

test('toSource', () => {
  const a = [1, 2, 3];

  expect(array.toSource(a)).toBe('[1,2,3]');
});

test('slice', () => {
  const a = [1, 2, 3];

  expect(array.slice(a)).toEqual(a.slice());
  expect(array.slice(a, 1, 2)).toEqual(a.slice(1, 2));
  expect(array.slice(a, -2, -1)).toEqual(a.slice(-2, -1));
});

test('reverse', () => {
  const a = [1, 2, 3, 4, 5];
  const b = [1, 2, 3, 4];

  expect(array.reverse(a)).toEqual(a.reverse());
  expect(array.reverse(b)).toEqual(b.reverse());
});

test('splice', () => {
  const a = [1, 2, 3, 4, 5];

  expect(array.splice(a)).toEqual(a.splice());
  expect(array.splice(a, 1, 2)).toEqual(a.splice(1, 2));
  expect(array.splice(a, -2, -1)).toEqual(a.splice(-2, -1));
});
