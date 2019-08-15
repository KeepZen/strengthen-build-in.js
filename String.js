const prototype = String.prototype;
const {
  match: _match,
} = prototype;

/**
 * Match from `index`.
 * @method String.prototype.match
 * @param {String|ExgExp} pattern 
 * @param {int} index 
 */
function match(pattern, index) {
  if (
    index == null ||
    pattern instanceof String ||
    !pattern.sticky
  ) {
    return _match.call(this, pattern);
  }
  const lastIndex = pattern.lastIndex;
  pattern.lastIndex = index;
  const ret = _match.call(this, pattern);
  pattern.lastIndex = lastIndex;
  return ret;
}

const start = () => {
  if (_match.length == 1) {
    String.prototype.match = match;
  }
}
const stop = () => {
  if (prototype.match === match) {
    prototype.match == _match;
  }
}

module.exports = {
  start,
  stop,
}
