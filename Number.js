const _toFixed = Number.prototype.toFixed;
/**
 * @name Number.prototype.toFixed
 * @param {float} f, must not less than zero.
 * @example
 * console.log((1).toFixed(2) === '01');
 * console.log((1).toFixed(2.2) === '01.00');
 * console.log((-1).toFixed(2) === '-1');
 * console.log((-1).toFixed(3.1) === '-01.0');
 */
function toFixed(f) {
  if (f < 0) {
    throw RangeError(`Expect n greater than zero, but get ${f}`);
  }
  let [miniIntegerLong, maxFloatLong = '0'] = String(f).split('.');
  miniIntegerLong -= 0;
  maxFloatLong -= 0;
  const symbol = this < 0 ? "-" : "";
  const abs = Math.abs(this);
  let [integerPart, floatPart] = _toFixed.call(abs, maxFloatLong).split('.');
  const factIntegerLong = (symbol + integerPart).length;
  const numberPreFixZero = Math.max(miniIntegerLong - factIntegerLong, 0);
  integerPart = '0'.repeat(numberPreFixZero) + integerPart;
  integerPart = `${symbol}${integerPart}`
  return floatPart != null ? `${integerPart}.${floatPart}` : integerPart;
}
const start = () => {
  Number.prototype.toFixed = toFixed;
}
const stop = () => {
  Number.prototype.toFixed = _toFixed;
}

module.exports = {
  start,
  stop,
}
