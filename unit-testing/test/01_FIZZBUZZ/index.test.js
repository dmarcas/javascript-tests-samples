const fizzBuzz = require('../../src/01_FIZZBUZZ/fizzBuzz').fizzBuzzMethod;

describe('Fizzbuzz should', () => {

    test('be a number from 1 to 100', () => {
        expect(fizzBuzz(0)).toBe("Number not Allowed");
        expect(fizzBuzz(101)).toBe("Number not Allowed");
    });

    test('print one line for each number from 1 to 100', () => {
        expect(fizzBuzz(1)).toBe(1);
        expect(fizzBuzz(74)).toBe(74);
    });

    test('for multiples of 3 print Fizz instead of the number', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });

    test('for multiples of 5 print Buzz instead of the number', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });

    test('for multiples of 3 and 5 print FizzBuzz instead of the number', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

});