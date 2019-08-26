function not_has(v) {
  return !this.has(v);
}

function diff(aSet) {
  aSet = new Set(aSet);
  return new Set([...this].filter(e => aSet.not_has(e)));
}

function union(aSet) {
  return new Set([...aSet, ...this]);
}

function intersection(aSet) {
  aSet = new Set(aSet);
  let [min, max] = this.size > aSet.size ? [aSet, this] : [this, aSet];
  return new Set(
    [...min].filter(ele => max.has(ele))
  );
}

function disjunctive(aSet) {
  let a = this.union(aSet);
  let b = this.intersection(aSet);
  return a.diff(b);
}

const symDiff = disjunctive;

const newPropertySet = new Set();
const {
  addNewProperty, deleteNewProperties,
} = require('./_protypeOperator');
const start = () => {
  const prototype = Set.prototype
  addNewProperty(
    'not_has', prototype, { value: not_has }, newPropertySet
  );
  addNewProperty(
    'diff', prototype, { value: diff, }, newPropertySet
  );
  addNewProperty(
    'union', prototype, { value: union }, newPropertySet
  );
  addNewProperty(
    'intersection', prototype, { value: intersection }, newPropertySet
  );
  addNewProperty(
    'disjunctive', prototype, { value: disjunctive }, newPropertySet
  );
  addNewProperty(
    'symDiff', prototype, { value: symDiff }, newPropertySet
  );
}

const stop = () => {
  deleteNewProperties(Set.prototype, newPropertySet);
}

module.exports = {
  start,
  stop,
}
