require('./Set').start();
test('set.not_has(v)', () => {
  let a = new Set();
  expect(a.not_has(0)).toBe(!a.has(0));
})
test('set.diff(anotherSet)', () => {
  let set = new Set([1, 2, 3]);
  let setDiff = set.diff([3, 4]);
  expect(setDiff.size).toBe(2);
  expect(setDiff.not_has(3)).toBe(true);
})
test('set.union(anotherSet)', () => {
  let set = new Set([1]);
  let set2 = new Set([2]);
  let u1 = set2.union(set);
  let u2 = set.union(set2);
  expect(u1.size).toBe(u2.size);
  expect(u1.has(1)).toBe(true);
  expect(u1.has(2)).toBe(true);
})

test('set.intersection(aother)', () => {
  let set = new Set([1]);
  let set2 = new Set([2]);
  let set3 = new Set([1, 2]);
  let inters = set.intersection(set2);
  expect(inters.size).toBe(0);
  let inters2 = set.intersection(set3);
  expect([...inters2]).toMatchObject([1]);
})

test('set.disjunctive()', () => {
  let set = new Set([1, 3, 4, 5,]);
  let set2 = new Set([2, 3, 4, 5]);
  let z = set.disjunctive(set2);
  expect(z.size).toBe(2);
  expect(z.has(1)).toBe(true);
  expect(z.has(2)).toBe(true);
})
