// 2.07 (**) Determine the greatest common divisor of two positive integer numbers.
// Use Euclid's algorithm.
// Example:
// ?- gcd(36, 63, G).
// G = 9
// Define gcd as an arithmetic function; so you can use it like this:
// ?- G is gcd(36,63).
// G = 9


export function greatestCommonDivisor(int1: number, int2: number): number {
    while (int1 % int2 > 0) {
        let remainder: number = int1 % int2;
        int1 = int2;
        int2 = remainder;
    }
    return int2;
}
// console.log(greatestCommonDivisor(36, 63));