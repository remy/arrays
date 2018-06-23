# Array exercises

This is an exercise to help understand array methods in JavaScript. The aim of the project is to add all (or most) of the missing array functions and passing tests.

By implementing the functions you'll get a better understanding as to how arrays work, but more importantly, writing tests for the arrays cements your understanding of _how_ to use the functions.

The implementations do not need to be perfect (i.e. accounting for extreme cases), but you're welcome to add more tests to make your code more robust.

The only requirement is that you do not use any native array methods (i.e. you can't use any of these listed methods).

## Setup

First clone (or download) this project, then from the directory, run the following commands. Note that you will need [node](https://nodejs.org) installed.

```sh
git clone git@github.com:remy/arrays.git
cd arrays
npm ci # if this doesn't work, us npm install
npm test -- --watch
```

## Important tips

- Remember that some functions will [mutate the array](https://doesitmutate.xyz/) (where the original array is changed inline vs. returning a new array).
- Do not use any native [array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- Use `for` loops to itterate and execute over arrays
- For tests, I recommend start with the examples that MDN provide - [here's a full list by method](https://github.com/mdn/interactive-examples/tree/master/live-examples/js-examples/array)
- Using native array methods _is allowed_ in tests, i.e.

```js
test('indexOf', () => {
  const a = [1, 2, 3, 1];
  expect(array.indexOf(a, 1)).toBe(a.indexOf(1));
})
```

- To change the length of an array, you can set the `length` property, i.e.

```js
const a = [1,2,3];
console.log(a.length); // 3
a.length = 0;
console.log(a.length); // 0
```

## Example

`array.push` - The push() method adds one or more elements to the end of an array and returns the new length of the array.

Implementation:

```js
function push(array, value) {
  const length = array.length;
  array[length] = value;
  return length + 1;
}
```

Test:

```js
test('push', () => {
  const a = [1, 2];
  const length = array.push(a, 4);
  expect(length).toBe(3);
  expect(a).toEqual([1, 2, 4]);
});
```
