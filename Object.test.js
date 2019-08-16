const { start, stop } = require('./Object');
test('obj.not_instanceof(Type)', () => {
  start();
  let n = 1;
  expect(n.not_instanceof(Number)).toBe(false);
  expect(n.not_instanceof(Function)).toBe(true);
  stop();
})
