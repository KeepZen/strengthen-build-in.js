const whether = (v) => {
  const instanceOf = (type) => v instanceof type;
  const a_number = () => v instanceof Number || typeof v == 'number';
  const a_bigint = () => typeof v == 'bigint';
  const a_number_or_bigint = () => a_number() || a_bigint();
  const a_string = () => typeof v == 'string' || v instanceof String;
  const a_boolean = () => typeof v == 'boolean' || v instanceof Boolean;
  const a_function = () => v instanceof Function;
  const a_object = () => v instanceof Object || v == null;
  const a_real_object = () => v instanceof Object;
  const a_empty_object = () => a_real_object() && !Object.keys(v).length;
  const a_primary = () => !(v instanceof Object);
  const conf = {
    configurable: false,
    enumerable: true,
  }
  const not = (checker) => {
    return Object.keys(checker).reduce(
      (ret, key) => {
        if (key == 'not') {
          return ret;
        }
        let config;
        if (key === 'instaceof') {
          config = {
            ...conf,
            value: (type) => !checker.instanceof(type)
          };
        }
        else {
          config = {
            ...config,
            get: () => !checker[key]
          }
        }
        Object.defineProperty(ret, key, config);
        return ret;
      },
      {}
    )
  }

  let checker = Object.defineProperties({}, {
    instanceof: {
      ...conf,
      value: instanceOf
    },
    a_number: {
      ...conf,
      get: a_number
    },
    a_bigint: {
      ...conf,
      get: a_bigint
    },
    a_number_or_bigint: {
      ...conf,
      get: a_number_or_bigint
    },
    a_string: {
      ...conf,
      get: a_string,
    },
    a_boolean: {
      ...conf,
      get: a_boolean,
    },
    a_function: {
      ...conf,
      get: a_function,
    },
    a_object: {
      ...conf,
      get: a_object
    },
    a_real_object: {
      ...conf,
      get: a_real_object
    },
    a_empty_object: {
      ...conf,
      get: a_empty_object
    },
    a_primary: {
      ...conf,
      get: a_primary
    },
  });
  return Object.defineProperty(checker, "not",
    {
      ...conf,
      get: () => not(checker)
    }
  );
}
const g = global || window;
const start = () => {
  g.whether = whether;
}
const stop = () => {
  if (g.whether == whether) {
    delete g.whether;
  }
  if (g.whether == whether) {
    delete g.whether;
  }
}
module.exports = {
  whether,
  start, stop
}
