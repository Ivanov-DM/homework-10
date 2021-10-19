export function sum(a?: number): (param: number) => any {
  let currentSum = a || 0;
  function cb(b: number) {
    currentSum += b;
    return cb;
  }

  cb.toString = function () {
    return `${currentSum}`;
  };

  return cb;
}
