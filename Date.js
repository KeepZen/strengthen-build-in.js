
const year = /%Y/g,
  month = /%m/g,
  dayOfMonth = /%d/g,
  hour = /%H/g,
  minute = /%M/g,
  second = /%S/g,
  dayOfWeek = /%u/g;

const n = require('./Number');

function format(fmt) {
  n.start();
  return fmt.replace(year, this.getFullYear())
    .replace(month, (this.getMonth() + 1).toFixed(2, 0))
    .replace(dayOfMonth, this.getDate().toFixed(2, 0))
    .replace(hour, this.getHours().toFixed(2, 0))
    .replace(minute, this.getMinutes().toFixed(2, 0))
    .replace(second, this.getSeconds().toFixed(2, 0))
    .replace(dayOfWeek, this.getDay());
}

const secsPerMinu = 60;
const secsPerHour = 60 * secsPerMinu;
const secsPerDay = 24 * secsPerHour;
function after({ d = 0, h = 0, m = 0, s = 0, } = {}) {
  const milliSeconds = this.valueOf() + (d * secsPerDay + h * secsPerHour + m * secsPerMinu + s) * 1000;
  return new Date(milliSeconds);
}
function before({ d = 0, h = 0, m = 0, s = 0 } = {}) {
  const milliSeconds = this.valueOf() - (d * secsPerDay + h * secsPerHour + m * secsPerMinu + s) * 1000;
  return new Date(milliSeconds);
}
const newPropertySet = new Set();
const { addNewProperty, deleteNewProperties } = require('./_protypeOperator');

const start = () => {
  addNewProperty('format', Date.prototype, { value: format }, newPropertySet)
  addNewProperty('after', Date.prototype, { value: after }, newPropertySet);
  addNewProperty('plus', Date.prototype, { value: after }, newPropertySet);
  addNewProperty('before', Date.prototype, { value: before }, newPropertySet);
  addNewProperty('minus', Date.prototype, { value: before }, newPropertySet);
}
const stop = () => {
  deleteNewProperties(Date.prototype, newPropertySet);
}

module.exports = {
  start,
  stop,
}
