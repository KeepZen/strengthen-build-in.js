/**
 * If you want to check whether `object` is a instance of `Type`,
 * it just like:
 * ```js
 * if(object instanceof Type){
 *    console.log('a');
 * }else{
 *    console.log('b');
 * }
 * ```
 * So the fellow is what I write, when I want to 
 * check whether `object` is not a instaceof `Type`:
 * ```js
 * if( ! object instaceof Type ){
 *    console.log('a');
 * }else{
 *    console.log(`b`);
 * }
 * ```
 * 
 * But it is **WRONG**.
 * 
 * Because `! object instaceof Type` is same as `!(object) instaceof Type`, 
 * but **NOT** same as `!(object instaceof Type)`.
 * 
 * Now with help of `not_instanceof(Type)`,
 * not we can write code fellows our thought more smoothly:
 * ```js
 * if( object.not_instanceof(Type)){
 *    console.log('a');
 * }else{
 *    console.log('b');
 * }
 * ``` 
 * @name Object.prototype.not_instanceof
 * @param {Class} aClass 
 * @example
 * const {star,end} = require('@keepzen/strengthen-build-in.js/Object');
 * start();
 * console.log( (1).not_instanceof(Number) === false);
 * console.log( (1).not_instanceof(Function) === true);
 * stop();
 * 
 * @returns {boolean}
 */
function not_instanceof(aClass) {
  return !(this instanceof aClass);
}
const { addNewProperty, deleteNewProperties } = require('./_protypeOperator');
const newPropertySet = new Set();
const start = () => {
  addNewProperty('not_instanceof', Object.prototype, { value: not_instanceof }, newPropertySet);
}
const stop = () => {
  deleteNewProperties(Object.prototype, newPropertySet);
}

module.exports = {
  start,
  stop
}
