export function curry(func: (...param: number[]) => number) {
  return function curryFunc(...args: number[]) {
    if (func.length > args.length) {
      return curry(func.bind(null, ...args));
    }
    return func(...args);
  };
}

// function sum(a: number, b: number, c: number, d: number, e: number): number {
//     return a + b + c + d + e;
// }
//
// const currySum = curry(sum);
// console.log(currySum(1, 2, 3, 4, 5)); // 15
// console.log(currySum(2, 3, 4)(5, 6)); // 20
// console.log(currySum(3, 4)(5, 6)(7)); // 25
// console.log(currySum(4, 5)(6)(7, 8)); // 30
// console.log(currySum(5)(6)(7)(8)(9)); // 35
