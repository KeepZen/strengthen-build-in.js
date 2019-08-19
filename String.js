const prototype = String.prototype;
const {
  match: _match,
} = prototype;

/**
 * Match from `index`.
 * @method String.prototype.match
 * @param {String|ExgExp} pattern 
 * @param {int} [index=0] 
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

const nameNewOldMap = new Map();
const {
  replaceMethodWithNew, recoverOldMethod,
} = require('./_protypeOperator');

const start = () => {
  nameNewOldMap.set('match', [match, _match]);
  replaceMethodWithNew(prototype, nameNewOldMap);
}
const stop = () => {
  recoverOldMethod(prototype, nameNewOldMap);
}

module.exports = {
  start,
  stop,
}
