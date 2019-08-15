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
const addPropers = new Set();
const prototype = Array.prototype;
const config = {
  enumerable: false,
  configurable: true,
};
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

const start = () => {
  const notHaveLast = !('last' in prototype);
  if (notHaveLast) {
    addPropers.add('last');
    Object.defineProperty(
      prototype,
      'last',
      {
        get: last,
        ...config,
      }
    );
  }
  const notHaveFirst = !('first' in prototype);
  if (notHaveFirst) {
    addPropers.add('first');
    Object.defineProperty(
      prototype,
      'first',
      {
        get: first,
        ...config,
      }
    )
  }
  const notHaveReject = !('reject' in prototype);
  if (notHaveReject) {
    addPropers.add('reject');
    Object.defineProperty(prototype, 'reject', {
      value: reject,
      ...config,
    });
  }
  const o = 'order';
  const notHaveOrder = !(o in prototype);
  if (notHaveOrder) {
    addPropers.add(o);
    Object.defineProperty(prototype, o, {
      value: order,
      ...config
    });
  }
}

const stop = () => {
  [...addPropers].forEach(key => {
    delete prototype[key];
  })
}
module.exports = {
  start,
  stop,
}
