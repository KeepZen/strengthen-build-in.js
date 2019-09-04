const libs = [];
libs.push(require('./Array'));
libs.push(require('./String'));
libs.push(require('./RegExp'));
libs.push(require('./Number'));
libs.push(require('./Date'));
libs.push(require('./Object'));
libs.push(require('./Set'));
libs.push(require('./whether'));
libs.push(require('./Math'));
const start = () => {
  libs.forEach(lib => lib.start());
}

const stop = () => {
  libs.forEach(lib => lib.stop());
}

module.exports = {
  start,
  stop,
  ...require('./whether'),
};

