const { start, stop } = require('./Object');
test('obj.not_instanceof(Type)', () => {
  start();
  let n = 1;
  expect(n.not_instanceof(Number)).toBe(false);
  expect(n.not_instanceof(Function)).toBe(true);
  stop();
})
test('Object.primary_type(v)', () => {
  start();
  expect(Object.is_primary_type(1)).toBe(true);
  expect(Object.is_primary_type("a")).toBe(true);
  expect(Object.is_primary_type(null)).toBe(true);
  expect(Object.is_primary_type(undefined)).toBe(true);
  expect(Object.is_primary_type(Symbol())).toBe(true);
  expect(Object.is_primary_type(Symbol)).toBe(false);
  stop();
})
test('Object.freeze(obj)', () => {
  start();
  let obj = Object.freeze({ z: 1, objc: { a: 2 } });
  obj.a = 'a';
  expect(`a` in obj).toBe(false);
  delete obj.z;
  expect(obj.z).toBe(1);
  expect(Object.isFrozen(obj.objc)).toBe(true);
  stop();
  obj = Object.freeze({ z: 1, objc: { a: 2 } });
  expect(Object.isFrozen(obj)).toBe(true);
  expect(Object.isFrozen(obj.objc)).toBe(false);
})
