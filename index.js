const libs = [];
libs.push(require('./Array'));
libs.push(require('./String'));
libs.push(require('./RegExp'));
libs.push(require('./Number'));
libs.push(require('./Date'));
libs.push(require('./Object'));
libs.push(require('./Set'));
/**
 *
 * You can use it as whole:
 * ```js
 * const {start} = require('@keepzen/strengthen-build-in.js');
 * start()
 * ```
 * Or you can just use a part such as ExgExp as fellow:
 * ```js
 * const {start} = require('@keepzen/strengthen-build-in.js/ExgExp');
 * start()
 * ```
 */

const start = () => {
  libs.forEach(lib => lib.start());
}
/**
 * Stop use the reinforce, recover to the buildin status.
 * 
 * Recover the whole status to buildin:
 * ```js
 * const {stop} = require('@keepzen/strengthen-build-in.js');
 * stop();
 * ```
 * 
 * Jest recover RegExp to buildin.
 * ```js
 * const {stop} = require('@keepzen/strengthen-build-in.js/RegExp');
 * stop();
 * ```
 */
const stop = () => {
  lib.forEach(lib => lib.stop());
}

module.exports = {
  start,
  stop,
};

