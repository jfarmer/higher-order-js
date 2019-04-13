const curry = (fn, filled = [], arity = fn.length) => {

  const stub = (...args) => {
    const newFilled = filled.concat(args);

    if (newFilled.length == arity) {
      return fn(...newFilled);
    } else if (newFilled.length > arity) {
      const innerArgs = newFilled.slice(0, arity);
      const outerArgs = newFilled.slice(arity);

      return fn(...innerArgs)(...outerArgs);
    } else {
      return curry(fn, newFilled);
    }
  };

  Object.defineProperty(stub, 'length', { value: arity - filled.length });

  return stub;
};

module.exports = curry;
