/**
 * @name Set.prototype.not_has
 * @param {any} v 
 * @returns{boolean}
 */
function not_has(v) {
  return !this.has(v);
}

/**
 * Support A is {a,b}, B is {b,c,d},
 * then C = A - B = {a}.
 * 
 * In Math as $\forall e \in C, \implies e \in A,\text{ and } e \notin B$.
 * @name Set.prototype.diff
 * @param {Set|Interator} aSet 
 * @return {Set}
 */
function diff(aSet) {
  aSet = new Set(aSet);
  return new Set([...this].filter(e => aSet.not_has(e)));
}

/**
 * Support A is {a,b}, B is {b,c,d},
 * then C =$A\cup{}B$  = {a,b,c,d}.
 * 
 * In Math as $\forall e \in C, \implies e \in A \text{ or } e \in B$.
 * @name Set.prototype.union
 * @param {Set|Interator} aSet
 * @return {Set}
 */
function union(aSet) {
  return new Set([...aSet, ...this]);
}

/**
 * Support A is {a,b}, B is {b,c,d},
 * then C = $A\cap{}B$ = {b}.
 * In Math $\forall e\in C, \implies e \in A \text{ and } e \in B$.
 * @name Set.prototype.intersection
 * @param {Set|Interator} aSet 
 * @returns {Set}
 */
function intersection(aSet) {
  aSet = new Set(aSet);
  let [min, max] = this.size > aSet.size ? [aSet, this] : [this, aSet];
  return new Set(
    [...min].filter(ele => max.has(ele))
  );
}


/**
 * A is {a,b}, B is {b,c,d}
 * The C = $A\Delta{}B$ = {a,c,d}
 * In Math $\forall e \in C$, $e \in A$ and $e\in B$ but $e\notin A \cup B$.
 * 
 * Also name as `symDiff` short for symmetric difference.
 * @name Set.prototype.disjunctive
 * @param {Set|Interator} aSet 
 * @returns {Set}
 */
function disjunctive(aSet) {
  let a = this.union(aSet);
  let b = this.intersection(aSet);
  return a.diff(b);
}

/**
 * `symDiff` short for symmetric difference.
 * 
 * Alias of `Set.prototype.disjunctive(aSet)`.
 * @name Set.prototype.symDiff
 * @param {Set|Interator} aSet
 * @returns {Set}
 */
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
