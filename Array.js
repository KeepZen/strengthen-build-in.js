function last() {
  return this[this.length - 1];
}

function first() {
  return this[0];
}
const newProperSet = new Set();
const prototype = Array.prototype;

const _not = (fn) => (...args) => !fn(...args);


function order(fn) {
  return [...this].sort(fn);
}


function reject(fn) {
  return this.filter(_not(fn));
}

function zip(arrayLike) {
  return this.map((ele, index) => [ele, arrayLike[index]]);
}
function all(fun, thisCallBack) {
  return this.length > 0 && this.every(fun, thisCallBack);
}
const { addNewProperty, deleteNewProperties } = require('./_protypeOperator');

const start = () => {
  addNewProperty('last', prototype, { get: last }, newProperSet);
  addNewProperty('first', prototype, { get: first }, newProperSet);
  addNewProperty('reject', prototype, { value: reject }, newProperSet);
  addNewProperty('order', prototype, { value: order }, newProperSet);
  addNewProperty('zip', prototype, { value: zip }, newProperSet);
  addNewProperty('all', prototype, { value: all }, newProperSet);
}

const stop = () => {
  deleteNewProperties(prototype, newProperSet);
}
module.exports = {
  start,
  stop,
}
