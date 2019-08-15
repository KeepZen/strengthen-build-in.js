require('./Date').start()
test('date.format(fmt)', () => {
  let d = new Date();
  let str = d.format('%Y-%m-%d');
  let shouldStr = `${d.getFullYear()}-${(d.getMonth() + 1).toFixed(2)}-${d.getDate().toFixed(2)}`;
  expect(str).toBe(shouldStr);
})
