const { start, stop } = require('./Array');

test("array.last", () => {
  start();
  let array = [1, 2, 3];
  expect(array.last).toBe(3);
  stop();
  expect(array.last).toBe(undefined);
  expect('last' in array).toBe(false);
});
test('array.first', () => {
  start();
  let array = [1, 2, 3];
  expect(array.first).toBe(1);
  stop();
  expect(array.first).toBe(undefined);
  expect('first' in array).toBe(false);
})

test('array.order(fn)', () => {
  start();
  let fn = (a, b) => a - b;
  let a1 = [7, 3, 1, 4, 6];
  let a2 = [...a1];
  let a3 = [...a1];
  a2.sort(fn);
  expect(a1.order(fn)).toMatchObject(a2);
  expect(a1).toMatchObject(a3);
  stop();
});
test('array.reject(fn)', () => {
  start();
  let a1 = [7, 3, 1, 4, 6];
  let fn1 = (a) => a % 2 == 0;
  let fn2 = (a) => a % 2 == 1;
  expect(a1.reject(fn1)).toMatchObject(a1.filter(fn2));
  stop();
})

test('array.zip(arrayLike)', () => {
  start();
  let numbers = [1, 2, 3, 4];
  let letters = ['a', 'b', 'c'];
  let ret = numbers.zip(letters);
  expect(ret.length).toBe(numbers.length);
  expect(ret).toMatchObject([[1, "a"], [2, "b"], [3, "c"], [4, undefined]]);
  stop();
})
test('array.all(fun)', () => {
  start();
  let numbers = [1, 2, 3, 4];
  expect(numbers.all(a => a > 0)).toBe(true);
  expect(numbers.all(a => a < 4)).toBe(false);
  expect([].all(a => a == 4)).toBe(false);
  stop();
})
