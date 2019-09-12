
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

function getTimeZone() {
  const zh = -this.getTimezoneOffset() / 60;
  if (zh > 0) {
    return '+' + zh;
  } else {
    return zh + ""
  }
}
const _toString = Date.prototype.toString;
function toString(fmt = '%Y-%m-%d %H-%M-%S') {
  return format.call(this, fmt);
}

const newPropertySet = new Set();
const {
  addNewProperty, deleteNewProperties,
  replaceMethodWithNew, recoverOldMethod,
} = require('./_protypeOperator');

const nameNewOldMap = new Map();
const start = () => {
  addNewProperty('format', Date.prototype, { value: format }, newPropertySet)
  addNewProperty('after', Date.prototype, { value: after }, newPropertySet);
  addNewProperty('plus', Date.prototype, { value: after }, newPropertySet);
  addNewProperty('before', Date.prototype, { value: before }, newPropertySet);
  addNewProperty('minus', Date.prototype, { value: before }, newPropertySet);
  addNewProperty('timeZone', Date.prototype, { get: getTimeZone }, newPropertySet);
  nameNewOldMap.set('toString', [toString, _toString]);
  replaceMethodWithNew(Date.prototype, { value: toString }, nameNewOldMap);
}
const stop = () => {
  deleteNewProperties(Date.prototype, newPropertySet);
  recoverOldMethod(Date.prototype, nameNewOldMap);
}

module.exports = {
  start,
  stop,
}
