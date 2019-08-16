const _toFixed = Number.prototype.toFixed;
/**
 * @name Number.prototype.toFixed
 * @param {uint} minIntegerLength
 * @param {uint} [maxFloatLength=null] 
 * if `maxFloatLong` be ignored, methold will same as the origin `toFixed`.
 * @example
 * console.log((1).toFixed(2) === '1.00');
 * console.log((1).toFixed(2,0) === '01');
 * console.log((1).toFixed(2,2) === '01.00');
 * console.log((-1).toFixed(2) === '-1.00');
 * console.log((-1).toFixed(3,1) === '-01.0');
 * 
 * @returns {String}
 */
function toFixed(minIntegerLength, maxFloatLength = null) {
  if (minIntegerLength < 0) {
    throw RangeError(`Expect n greater than zero, but get ${minIntegerLength}`);
  }
  if (maxFloatLength == null) {
    return _toFixed.call(this, minIntegerLength);
  }
  if ((typeof maxFloatLength != 'number') || maxFloatLength < 0) {
    throw RangeError(`Expect a number greater than zero, but get ${maxFloatLength}`);
  }
  const symbol = this < 0 ? "-" : "";
  const abs = Math.abs(this);
  let [integerPart, floatPart = ''] = _toFixed.call(abs, maxFloatLength).split('.');
  const factIntegerLong = (symbol + integerPart).length;
  const numberZeroRepeat = Math.max(minIntegerLength - factIntegerLong, 0);
  integerPart = `${symbol}${'0'.repeat(numberZeroRepeat)}${integerPart}`
  if (floatPart != '') {
    floatPart = '.' + floatPart;
  }
  return `${integerPart}${floatPart}`;
}
const nameNewOldMap = new Map();
const {
  replaceMethodWithNew, recoverOldMethod,
} = require('./_protypeOperator');
const start = () => {
  nameNewOldMap.set('toFixed', [toFixed, _toFixed]);
  replaceMethodWithNew(Number.prototype, nameNewOldMap);
}
const stop = () => {
  recoverOldMethod(Number.prototype, nameNewOldMap);
}

module.exports = {
  start,
  stop,
}
