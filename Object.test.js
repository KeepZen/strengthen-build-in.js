const { start, stop } = require('./Object');
test('obj.not_instanceof(Type)', () => {
  start();
  let n = 1;
  expect(n.not_instanceof(Number)).toBe(false);
  expect(n.not_instanceof(Function)).toBe(true);
  stop();
})

test('Object.constant(obj)', () => {
  start();
  let obj = Object.constant({ z: 1 });
  obj.a = 'a';
  expect(`a` in obj).toBe(false);
  delete obj.z;
  expect(obj.z).toBe(1);
  stop();
})
