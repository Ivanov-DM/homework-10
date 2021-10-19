import { curry } from "./part1";

describe("Tests for part1.js", () => {
  let currySum: (...args: number[]) => any;

  beforeAll(() => {
    function sum(
      a: number,
      b: number,
      c: number,
      d: number,
      e: number
    ): number {
      return a + b + c + d + e;
    }
    currySum = curry(sum);
  });

  describe("Curry sum function", () => {
    it("Curry sum function with 1 params", () => {
      expect(currySum(1, 2, 3, 4, 5)).toEqual(15);
    });

    it("Curry sum function with 2 params", () => {
      expect(currySum(1, 2)(3, 4, 5)).toEqual(15);
    });

    it("Curry sum function with 3 params", () => {
      expect(currySum(1, 2)(3, 4)(5)).toEqual(15);
    });

    it("Curry sum function with 4 params", () => {
      expect(currySum(1, 2)(3)(4)(5)).toEqual(15);
    });

    it("Curry sum function with 5 params", () => {
      expect(currySum(1)(2)(3)(4)(5)).toEqual(15);
    });
  });
});
