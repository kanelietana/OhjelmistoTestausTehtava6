import { divide } from '../src/calculator.js'

describe('divide', () => {
    it('divides positive numbers', () => {
        expect(divide(6, 2)).toBe(3);
    });

    it('divides negative numbers', () => {
        expect(divide(-6, -2)).toBe(3);
    });

    it('throws when inputs are not numbers', () => {
        expect(() => divide('6', 2)).toThrow('Both arguments must be numbers');
    });

    it('thows when input a is missing', () => {
        expect(() => divide(NaN, 2)).toThrow('Arguments cannot be NaN');
    });

    it('throws when input b is missing', () => {
        expect(() => divide(6, NaN)).toThrow('Arguments cannot be NaN')
    });

    it('throws when trying to divide by zero', () => {
        expect(() => divide(6, 0)).toThrow('Division by zero is not allowed');
    });

    
});