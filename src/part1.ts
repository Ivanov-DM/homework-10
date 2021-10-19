export function curry(func: (...param: number[]) => number) {
  return function curryFunc(...args: number[]) {
    if (func.length > args.length) {
      return curry(func.bind(null, ...args));
    }
    return func(...args);
  };
}
