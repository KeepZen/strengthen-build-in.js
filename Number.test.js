require('./Number').start();
test('Number.toFixed(n)', () => {
  expect((1).toFixed(2)).toBe('1.00');
  expect((1).toFixed(0, 1)).toBe('1.0');
  expect((1).toFixed(2, 2)).toBe('01.00');
  expect((1).toFixed(2, 0)).toBe('01');

  expect((-1).toFixed(2, 2)).toBe('-1.00');
  expect((-1).toFixed(3, 2)).toBe('-01.00');
  expect((-1).toFixed(4, 2)).toBe('-001.00');
})

test('number.round({afterPoint,roundInGreateThan=4})', () => {
  expect((2.501).round({ endAfterPoint: 2 })).toBe(2.50)
  expect((2.501).round({ endAfterPoint: 2 })).toBe((2.504).round({ endAfterPoint: 2 }))
  expect((2.501).round({ endAfterPoint: 2 })).toBeLessThan((2.505).round({ endAfterPoint: 2 }))
  expect((2.510).round({ endAfterPoint: 2 })).toBe((2.506).round({ endAfterPoint: 2 }))
  expect((-2.501).round({ endAfterPoint: 2 })).toBe(-2.5)
  expect((-2.504).round({ endAfterPoint: 2 })).toBe(-2.5)
  expect((-2.505).round({ endAfterPoint: 2 })).toBe(-2.51)
})
