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
