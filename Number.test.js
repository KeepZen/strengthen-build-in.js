require('./Number').start();
test('Number.toFixed(n)', () => {
  expect((1).toFixed(0.1)).toBe('1.0');
  expect((1).toFixed(2.2)).toBe('01.00');
  expect((1).toFixed(2)).toBe('01');

  expect((-1).toFixed(2.2)).toBe('-1.00');
  expect((-1).toFixed(3.2)).toBe('-01.00');
  expect((-1).toFixed(4.2)).toBe('-001.00');
})
