const { start, stop } = require('./Math.js');
test('randomRange({end})', () => {
  let z = [];
  start();
  for (let i = 0; i < 10000; i++) {
    z.push(Math.randomRange({ end: 100 }));
  }
  stop();
  let mean = z.reduce(
    (mean, i) => {
      return mean + i / z.length;
    }, 0
  )
  for (let e of z) {
    expect(e).not.toBeLessThan(0);
    expect(e).toBeLessThan(100);
  }
  expect(Math.abs(mean - 50)).toBeLessThan(1);
})

test('Math.randomRange({begin,end})', () => {
  let z = [];
  start();
  for (let i = 0; i < 10000; i++) {
    z.push(Math.randomRange({ begin: 50, end: 100 }));
  }
  stop();
  const mean = z.reduce(
    (mean, i) => {
      return mean + i / z.length;
    }, 0
  )
  for (let e of z) {
    expect(e).not.toBeLessThan(50);
    expect(e).toBeLessThan(100);
  }
  expect(Math.abs(150 / 2 - mean)).toBeLessThan(10);
})
