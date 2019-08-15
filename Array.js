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
const start = () => {
  const notHaveLast = !('last' in prototype);
  if (notHaveLast) {
    console.log('last');
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
