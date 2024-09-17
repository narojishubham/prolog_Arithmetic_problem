// 2.09 (**) Calculate Euler's totient function phi(m).
// Euler's so-called totient function phi(m) is defined as the number of positive integers r (1 <= r < m) that are coprime to m.
// Example: m = 10: r = 1,3,7,9; thus phi(m) = 4. Note the special case: phi(1) = 1.
// ?- Phi is totient_phi(10).
// Phi = 4

import { greatestCommonDivisor } from "./2.07"

export function Phi(n:number): number {
    let result = 1;
    for (let i: number = 2; i < n; i++)
        if (greatestCommonDivisor(i, n) == 1)
            result += 1;
    return result;
}
// console.log("phi = " + Phi(10));