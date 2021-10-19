import { sum } from "./part2";

describe("Tests for part2.ts", () => {
  const currentAlert = window.alert;

  beforeAll(() => {
    window.alert = jest.fn((func) => func.toString());
  });

  afterAll(() => {
    window.alert = currentAlert;
  });

  describe("Testing sum function without arguments", () => {
    it("Sum function without arguments should return 0", () => {
      expect(alert(sum())).toEqual("0");
    });
  });

  describe("Testing sum function with arguments", () => {
    let s: (param: number) => any;
    beforeEach(() => {
      s = sum();
    });

    it("Sum function with argument 1 should return 1", () => {
      expect(alert(s(1))).toEqual("1");
    });

    it("Sum function with arguments 1 and 2 should return 3", () => {
      expect(alert(s(1)(2))).toEqual("3");
    });

    it("Sum function with arguments 3, 4 and 5 should return 12", () => {
      expect(alert(s(3)(4)(5))).toEqual("12");
    });
  });

  describe("Testing sum function with argument 3", () => {
    let s3: (param: number) => any;

    beforeEach(() => {
      s3 = sum(3);
    });

    it("Sum function with argument 5 should return 8", () => {
      expect(alert(s3(5))).toEqual("8");
    });

    it("Sum function with argument 6 should return 9", () => {
      expect(alert(s3(6))).toEqual("9");
    });
  });
});
