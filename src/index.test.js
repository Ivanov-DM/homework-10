import { sum } from "./index";

describe("Example tests", () => {
  it("Tests for sum function", () => {
    expect(typeof sum).toBe("function");
    expect(sum(1, 2)).toEqual(3);
  });
});
