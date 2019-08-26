
test('date.format(fmt)', () => {
  require('./Date').start();
  const { start, stop } = require('./Number')
  start();
  let d = new Date();
  let str = d.format('%Y-%m-%d');
  let m = (d.getMonth() + 1).toFixed(2, 0)
  let day = d.getDate().toFixed(2, 0);
  let shouldStr = `${d.getFullYear()}-${m}-${day}`;
  stop();
  expect(str).toBe(shouldStr);
})

test('date.after({})', () => {
  let date = new Date();
  let after10Days = date.after({ d: 10 });
  expect(after10Days - date).toBe(10 * 24 * 3600 * 1000);
  let after10Minus = date.after({ m: 10 });
  expect(after10Minus - date).toBe(10 * 60 * 1000);
});


test('date.plus({})', () => {
  let date = new Date();
  let after10Days = date.plus({ d: 10 });
  expect(after10Days - date).toBe(10 * 24 * 3600 * 1000);
  let after10Minus = date.plus({ m: 10 });
  expect(after10Minus - date).toBe(10 * 60 * 1000);
  let after10Seconds = date.plus({ s: 10 });
  expect(after10Seconds - date).toBe(10 * 1000);
});

test('data.before()', () => {
  let date = new Date();
  let before10Days = date.before({ d: 10 });
  expect(before10Days - date).toBe(-10 * 24 * 3600 * 1000);
  let before10Minus = date.before({ m: 10 });
  expect(before10Minus - date).toBe(-10 * 60 * 1000);
})
