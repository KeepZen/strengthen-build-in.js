const notEnumeButConfigurable = {
  enumerable: false,
  configurable: true,
};
const addNewProperty = (name, prototype, config, newewPropertySet) => {
  const notHaveProperty = !(name in prototype);
  if (notHaveProperty) {
    newewPropertySet.add(name);
    Object.defineProperty(
      prototype,
      name,
      {
        ...notEnumeButConfigurable,
        ...config
      }
    )
  }
}
const deleteNewProperties = (prototype, newPropertySet) => {
  [...newPropertySet].forEach(key => delete prototype[key]);
  newPropertySet.clear();
}
const replaceMethodWithNew = (prototype, nameNewOldMap) => {
  [...nameNewOldMap.keys()].forEach(name => {
    const [newMethod, oldMethod] = nameNewOldMap.get(name);
    if (prototype[name] == oldMethod) {
      prototype[name] = newMethod;
    }
  });
}
const recoverOldMethod = (prototype, nameNewOldMap) => {
  [...nameNewOldMap.keys()].forEach(name => {
    const [newMethod, oldMethod] = nameNewOldMap.get(name);
    if (prototype[name] == newMethod) {
      prototype[name] = oldMethod;
    }
  });
}
module.exports = {
  addNewProperty, deleteNewProperties,
  replaceMethodWithNew, recoverOldMethod,
};
