/**
 * The last element in the `array`.
 * @name Array.prototype.last
 * @example
 * console.log([1].last == 1);
 */
function last() {
  return this[this.length - 1];
}

/**
 * The first element in the `array`.
 * @name Array.prototype.first
 * @example
 * console.log([1].first == 1)
 */
function first() {
  return this[0];
}
const newProperSet = new Set();
const prototype = Array.prototype;

const _not = (fn) => (...args) => !fn(...args);

/**
 * Sort this arry with `fn` get a new orderd array.
 * 
 * `order` create a **new array**, **not change** the origin array. 
 * @name Array.prototype.order
 * @param {Function} fn :`(a:any,b:any)=>int`
 * @returns {Array}
 */
function order(fn) {
  return [...this].sort(fn);
}

/**
 * Filter out this array.
 * 
 * If `fn` return `true` , `ele` will not included in result, else included.
 * @name Array.prototype.reject
 * @param {Function} fn :`(ele:any,index:int)=> boolean`
 * @returns {Array}
 */

function reject(fn) {
  return this.filter(_not(fn));
}
const { addNewProperty, deleteNewProperties } = require('./_protypeOperator');

const start = () => {
  addNewProperty('last', prototype, { get: last }, newProperSet);
  addNewProperty('first', prototype, { get: first }, newProperSet);
  addNewProperty('reject', prototype, { value: reject }, newProperSet);
  addNewProperty('order', prototype, { value: order }, newProperSet);
}

const stop = () => {
  deleteNewProperties(prototype, newProperSet);
}
module.exports = {
  start,
  stop,
}
