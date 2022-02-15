import "@testing-library/jest-dom";
import { isFibonacci } from ".";

describe("isFibonacci function", () => {
  it("Should return true when number is in Fibonacci Sequence", () => {
    const result = isFibonacci(1);

    expect(result).toBe(true);
  });

  it("Should return false when number is not in Fibonacci Sequence", () => {
    const result = isFibonacci(4);

    expect(result).toBe(false);
  });

  it("Should return false when number is negative", () => {
    const result = isFibonacci(-1);

    expect(result).toBe(false);
  });

  it("Should return false for float numbers", () => {
    const result = isFibonacci(9.1);

    expect(result).toBe(false)
  })
});
