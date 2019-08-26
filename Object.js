const is_not_instance_of = (a, Type) => !(a instanceof Type)
function not_instanceof(aClass) {
  return is_not_instance_of(this, aClass);
}

const is_primary_type = function (v) {
  return is_not_instance_of(v, Object);
}

const _freeze = Object.freeze;
const freeze_deep = (valueSet, v) => {
  if (is_primary_type(v)) {
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
    'is_primary_type',
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
