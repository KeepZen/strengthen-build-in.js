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
