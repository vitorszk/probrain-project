import '@testing-library/jest-dom'
import { numberIsValid } from '.'

describe("numberIsValid function", () => {
    it("Should return true", () => {
        const result = numberIsValid(1)

        expect(result).toBe(true)
    })

    it("Should return false for numbers below 0", () => {
        const result = numberIsValid(0)
        const result2 = numberIsValid(-1)

        expect(result).toBe(false)        
        expect(result2).toBe(false)
    })

    it("Should return false for numbers above 1000", () => {
        const result = numberIsValid(1001)
        const result2 = numberIsValid(2000)

        expect(result).toBe(false)        
        expect(result2).toBe(false)
    })
})