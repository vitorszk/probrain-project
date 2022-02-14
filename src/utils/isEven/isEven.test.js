import "@testing-library/jest-dom";
import { isEven } from ".";

describe("isEven function", () => {
  it("Should return true when number is even", () => {
    const result = isEven(2)

    expect(result).toBe(true);
  });

  it("Should return true when number = 0", () => {
    const result = isEven(0)

    expect(result).toBe(true);
  });

  it("Should return false when number is uneven", () => {
      const result = isEven(3)

      expect(result).toBe(false)
  })

  it("Should return false for negative numbers", () => {
    const result = isEven(-3)

    expect(result).toBe(false)
})
});
