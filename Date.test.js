/**
 * 
 * @param {String} fmt 
 * Like the Unix `date` format. But just the subset.
 * 
 * | Fortmat | Description |
 * | %Y |  year full digit|
 * | %m |  month (01..12) |
 * | %d   day of month (e.g., 01)|
 * | %H  | hour (00..23) |
 * | %M |  minute (00..59) |
 * | %S  | second (00..60) |
 * | %u  | day of week (1..7); 1 is Monday|
 */
const year = /%Y/g,
  month = /%m/g,
  dayOfMonth = /%d/g,
  hour = /%H/g,
  minute = /%M/g,
  second = /%S/g,
  dayOfWeek = /%u/g,
function fromat(fmt) {
  self = new Date();
  return fmt.replace(year, self.getFullYear())
    .replace(month, self.getMonth() + 1)
    .replace(dayOfMonth, self.getDate().toFix(-2))
    .replace(hour, self.getHour())
    .replace(minute, self.getMinute())
    .replace(second, getSecond())
    .replace(dayOfWeek, getDayOfWeek());
}
