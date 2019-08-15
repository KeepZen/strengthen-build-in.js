
const year = /%Y/g,
  month = /%m/g,
  dayOfMonth = /%d/g,
  hour = /%H/g,
  minute = /%M/g,
  second = /%S/g,
  dayOfWeek = /%u/g;

const n = require('./Number');

/**
 * @description
 * Like the Unix `date` format. But just the subset.
 *
 * | Fortmat | Description |
 * |--------|---------------|
 * | %Y |  year full digit |
 * | %m |  month (01..12)  |
 * | %d |  day of month (e.g., 01) |
 * | %H  | hour (00..23) |
 * | %M |  minute (00..59) |
 * | %S  | second (00..60) |
 * | %u  | day of week (1..7); 1 is Monday |
 * 
 * @name Date.prototype.format
 * @param {String} fmt
 * @returns {String}
 */
function format(fmt) {
  n.start();
  return fmt.replace(year, this.getFullYear())
    .replace(month, (this.getMonth() + 1).toFixed(2))
    .replace(dayOfMonth, this.getDate().toFixed(2))
    .replace(hour, this.getHours().toFixed(2))
    .replace(minute, this.getMinutes().toFixed(2))
    .replace(second, this.getSeconds())
    .replace(dayOfWeek, this.getDay());
}
const addProperty = new Set();
const start = () => {
  addProperty.add(`format`);
  Date.prototype.format = format;
}
const stop = () => {
  [...addProperty].forEach(key => delete Date.prototype[key]);
}

module.exports = {
  start,
  stop,
}
