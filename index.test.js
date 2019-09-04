const { start, stop } = require('./index');
test('start()', () => {
  start();
  const str = 'run there';
  expect(str).toBe(str);
})
test('stop', () => {
  stop();
  const str = 'run there';
  expect(str).toBe(str);
})
