import "@testing-library/jest-dom";
import { isPin } from ".";

describe("isEven function", () => {
    it("Should return true", () => {
        const result = isPin(4, 4)

        expect(result).toBe(true)
    })

    it("Should return false", () => {
        const result = isPin(3, 4)

        expect(result).toBe(false)
    })

    it("Should return true when numberToVerify = 0", () => {
        const result = isPin(0, 4)

        expect(result).toBe(true)
    })
});