import {add, fizzBuzz, getLengthOfVector} from './math';

describe('Level 1: Basics', () => {
    test('returns 1 + 2 equals 3', () => {
        expect(add(1, 2)).toBe(3);
    });
});

describe('Level 2: FizzBuzz', () => {
    test('returns Fizz if value is divisible by 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });

    test('returns Buzz if value is divisible by 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });

    test('returns FizzBuzz if value is divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    test('returns the value as a string otherwise', () => {
        expect(fizzBuzz(1)).toBe('1');
    });
});

describe('Level 3: Length of vector', () => {
    test('returns the length of the vector', () => {
        expect(getLengthOfVector([3, 4])).toBe(5);
    });
});
