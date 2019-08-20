const is = require('./whether').is;

test('is(a).instaceof(Type)', () => {
  expect(is({}).instanceof(Object)).toBe(true);
  expect(is(1).instanceof(Number)).toBe(false);
  expect(is(new Number(1)).instanceof(Number)).toBe(true);
  expect(is(null).instanceof(Object)).toBe(false);
})
test("is(a).aXXX", () => {
  expect(is(1).a_number).toBe(true);
  expect(is(new Number(1)).a_number);
  expect(is(1).not.a_string).toBe(true);
  expect(is(null).a_object).toBe(true);
  expect(is(null).a_real_object).toBe(false);
  expect(is({}).a_real_object).toBe(true);
  expect(is({}).a_empty_object).toBe(true);
  expect(is([]).a_empty_object).toBe(true);
  expect(is([1]).not.a_empty_object).toBe(true);
  expect(is({ a: 1 }).not.a_empty_object).toBe(true);
  expect(is(1).a_primary).toBe(true);
  expect(is(new Number(1)).not.a_primary).toBe(true);
  expect(is(null).a_primary).toBe(true);
  expect(is(undefined).a_primary).toBe(true);
  expect(is(Symbol()).a_primary).toBe(true);
})
