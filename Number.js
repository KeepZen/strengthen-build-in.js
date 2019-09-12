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
function round({ endAfterPoint, roundInGreaterThan = 4 } = {}) {
  const str = _toFixed.call(this, endAfterPoint + 1);
  const [intStr, floatString] = str.split(".");
  let intPart = intStr - 0;
  let floatPart = floatString.substring(0, endAfterPoint) - 0;
  const shouldRoundIn = (floatString[endAfterPoint] - 0) > roundInGreaterThan;
  if (shouldRoundIn) {
    floatPart += 1;
  }
  const roundIn = (intPart >= 0 ? 1 : -1);
  const floatPartUplimit = 10 ** endAfterPoint;
  if (floatPart > floatPartUplimit) {
    intPart += roundIn;
    floatPart -= floatPartUplimit;
  }
  floatPart *= roundIn;
  return intPart + floatPart / floatPartUplimit;
}
const nameNewOldMap = new Map();
const {
  replaceMethodWithNew, recoverOldMethod,
  addNewProperty, deleteNewProperties,
} = require('./_protypeOperator');

const newPropertySet = new Set();
const start = () => {
  nameNewOldMap.set('toFixed', [toFixed, _toFixed]);
  replaceMethodWithNew(Number.prototype, nameNewOldMap);
  newPropertySet.add('round');
  addNewProperty("round", Number.prototype, { value: round }, newPropertySet);
}
const stop = () => {
  recoverOldMethod(Number.prototype, nameNewOldMap);
  deleteNewProperties(Number.prototype, newPropertySet);
}

module.exports = {
  start,
  stop,
}
