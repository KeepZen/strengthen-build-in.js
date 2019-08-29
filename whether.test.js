const whether = require('./whether').is;

test('whether(a).instaceof(Type)', () => {
  expect(whether({}).instanceof(Object)).toBe(true);
  expect(whether(1).instanceof(Number)).toBe(false);
  expect(whether(new Number(1)).instanceof(Number)).toBe(true);
  expect(whether(null).instanceof(Object)).toBe(false);
})
test("whether(a).aXXX", () => {
  expect(whether(1).a_number).toBe(true);
  expect(whether(new Number(1)).a_number);
  expect(whether(1).not.a_string).toBe(true);
  expect(whether(null).a_object).toBe(true);
  expect(whether(null).a_real_object).toBe(false);
  expect(whether({}).a_real_object).toBe(true);
  expect(whether({}).a_empty_object).toBe(true);
  expect(whether([]).a_empty_object).toBe(true);
  expect(whether([1]).not.a_empty_object).toBe(true);
  expect(whether({ a: 1 }).not.a_empty_object).toBe(true);
  expect(whether(1).a_primary).toBe(true);
  expect(whether(new Number(1)).not.a_primary).toBe(true);
  expect(whether(null).a_primary).toBe(true);
  expect(whether(undefined).a_primary).toBe(true);
  expect(whether(Symbol()).a_primary).toBe(true);
})
