const randomRange = ({ begin = 0, end } = {}) => {
  return begin + Math.random() * (end - begin);
}
const randomInt = ({ begin = 0, end } = {}) =>
  Math.floor(randomRange({ begin, end }));


const {
  addNewProperty,
  deleteNewProperties,
} = require('./_protypeOperator');
const newPropertySet = new Set();
const start = () => {
  addNewProperty('randomRange', Math, { value: randomRange }, newPropertySet);
  addNewProperty('randomInt', Math, { value: randomInt }, newPropertySet);
}
const stop = () => {
  deleteNewProperties(Math, newPropertySet);
}
module.exports = {
  start,
  stop,
}
