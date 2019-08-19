const { exec: _exec, test: _test } = RegExp.prototype;
/**
 * @name Exgexp.prototype.exec
 * @param {String} str The string from which you want to exactor pattern.
 * @param {int} [index=0]  Match from where to begin.
 */
function exec(str, index = null) {
  return _helper_for_regex(this, _exec, index, str);
}
/**
 * @name Exgexp.prototype.test
 * @param {String} str The string be tested.
 * @param {int} [index=0]
 * From where to begin the test, default is zero.
 */
function test(str, index = null) {
  return _helper_for_regex(this, _test, index, str);
}

const _helper_for_regex = (regex, method, index, str) => {
  if (
    (regex.sticky || regex.global) &&
    index != null
  ) {
    regex.lastIndex = index;
  }
  return method.call(regex, str);
}

const nameNewOldMap = new Map();
const {
  replaceMethodWithNew, recoverOldMethod,
} = require('./_protypeOperator');
const start = () => {
  nameNewOldMap.set('exec', [exec, _exec]);
  nameNewOldMap.set('test', [test, _test]);
  replaceMethodWithNew(RegExp.prototype, nameNewOldMap);
}
const stop = () => {
  recoverOldMethod(RegExp.prototype, nameNewOldMap);
}

module.exports = {
  start,
  stop,
}
