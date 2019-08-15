const { exec: _exec, test: _test } = RegExp.prototype;
/**
 * @name Exgexp.prototype.exec
 * @param {String} str The string from which you want to exactor pattern.
 * @param {int} index  Match from where to begin.
 */
function exec(str, index = null) {
  return _helper_for_regex(this, _exec, index, str);
}
/**
 * @name Exgexp.prototype.test
 * @param {String} str The string be tested.
 * @param {int} index
 * From where to begin the test, default is zero.
 */
function test$(str, index = null) {
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

const start = () => {
  RegExp.prototype.exec = exec;
  RegExp.prototype.test = test$;
}
const stop = () => {
  RegExp.prototype.exec = _exec;
  RegExp.prototype.test = _test;
}

module.exports = {
  start,
  stop,
}
