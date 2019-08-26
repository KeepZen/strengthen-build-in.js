const _toFixed = Number.prototype.toFixed;

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
