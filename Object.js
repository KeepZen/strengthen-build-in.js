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
 * we can write code fellows our thought more smoothly:
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

const is_primary_type = function (v) {
  v.not_instanceof(Object) || v === null;
}

const _freeze = Object.freeze;
const freeze_deep = (valueSet, v) => {
  console.log(`v :${v}`);
  if (Object.primary_type(v)) {
    return v;
  }
  if (valueSet.has(v) == false) {
    valueSet.add(v);
  }
  Object.values(v)
    .filter(v => {
      return !is_primary_type(v) && valueSet.has(v) == false
    })
    .forEach((v) => {
      freeze_deep(valueSet, v);
    })
  return _freeze.call(Object, v);
}

/**
 * `Object.constant` rename to `Object.freeze`.
 * @name Object.freeze
 * @param {Object} v 
 * @param {Object} [arg$1={deep:true}]
 * @example
 * const {start:objStart,stop:objStop} = require('keepzen/strengthen-build-in.js/Object');
 * objStart();
 * let o = Object.freeze({a:1,b:2,c:{d:1}});
 * let o2 = Object.freeze({a:1,b:2,c:{d:1}},{deep:false});
 * objStop();
 * console.log(Object.freezon(o.c) === true);
 * console.log(Object.freezon(o2.c) === true);
 * let o3 = Object.freeze({a:1,b:2,c:{d:1}});
 * console.log(Object.freezon(o3.c) === false);
 * 
 * @returns {Object} Same as origian `Object.freeze()`.
 */
const freeze = (v, { deep = true } = {}) => {
  if (deep) {
    return freeze_deep(new Set(), v)
  } else {
    return _freeze.call(Object, v);
  }
}

const {
  replaceMethodWithNew, recoverOldMethod,
  addNewProperty, deleteNewProperties,
} = require('./_protypeOperator');

const nameNewOldMap = new Map();
const newPropertySet = new Set();
const start = () => {
  replaceMethodWithNew(
    Object,
    nameNewOldMap.set('freeze', [freeze, _freeze])
  );


  addNewProperty(
    'not_instanceof',
    Object.prototype, { value: not_instanceof },
    newPropertySet
  );
  addNewProperty(
    'primary_type',
    Object,
    { value: is_primary_type },
    newPropertySet
  );

}
const stop = () => {
  deleteNewProperties(Object.prototype, newPropertySet);
  deleteNewProperties(Object, newPropertySet);
  recoverOldMethod(Object, nameNewOldMap);
}

module.exports = {
  start,
  stop
}
