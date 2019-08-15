const { start } = require('./RegExp');

test('reg.exec(str,index)', () => {
  start();
  let reg = /abc/g;
  let str = "eabc-abc-abc"
  let ret = reg.exec(str)
  expect(ret.index).toBe(1);
  expect(reg.lastIndex).toBe(4);
  expect(reg.exec(str).index).toBe(5);
  expect(reg.lastIndex).toBe(8);
  expect(reg.exec(str).index).toBe(9);
  ret = reg.exec(str, 0);
  expect(ret.index).toBe(1);
  expect(reg.lastIndex).toBe(4);
  expect(reg.exec(str).index).toBe(5);
  expect(reg.lastIndex).toBe(8);
  expect(reg.exec(str).index).toBe(9);
})

test('reg.test(str,index)', () => {
  start();
  let reg = /abc/y;
  let str = "eabc-abc-abc"
  let ret = reg.test(str)
  expect(ret).toBe(false);
  expect(reg.lastIndex).toBe(0);
  ret = reg.test(str, 1);
  expect(ret).toBe(true);
  expect(reg.lastIndex).toBe(4);
  expect(reg.test(str)).toBe(false);
  let reg2 = /abc/y;
  reg2.lastIndex = 5;
  expect(reg.test(str, 5)).toBe(reg2.test(str));
  expect(reg.lastIndex).toBe(reg2.lastIndex);
})
