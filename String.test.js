const { start } = require('./String');

test('str match', () => {
  start();
  const str = 'abc-abc-abc';
  const regexp = /[a-z]{3}/y;
  expect(str.match(regexp)).toHaveProperty('index', 0);
  expect(regexp.lastIndex).toBe(3);
  expect(str.match(regexp)).toBe(null);
  expect(regexp.lastIndex).toBe(0);
  expect(str.match(regexp, 4)).toHaveProperty('index', 4);
  expect(regexp.lastIndex).toBe(0);
});
