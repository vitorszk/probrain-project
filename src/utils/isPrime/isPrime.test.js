import "@testing-library/jest-dom";
import { isPrime } from ".";

describe("isPrime function", () => {
  it("Should return true", () => {
    const result = isPrime(7);

    expect(result).toBe(true);
  });

  it("Should return false", () => {
    const result = isPrime(4);

    expect(result).toBe(false);
  });

  it("Should return false for number 1", () => {
    const result = isPrime(1);

    expect(result).toBe(false);
  });
});
