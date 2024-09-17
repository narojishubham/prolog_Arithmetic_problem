// 2.02 (**) Determine the prime factors of a given positive integer.
// Construct a flat list containing the prime factors in ascending order.
// Example:
// ?- prime_factors(315, L).
// L = [3,3,5,7]

export function primeFactors(input: number): Array<number> {
  let primeFactorNumbers: Array<number> = [];
  let divisor = 2;
  while (input > 2) {
    if (input % divisor == 0) {
      primeFactorNumbers.push(divisor);
      input = input / divisor;
    } else {
      divisor++;
    }
  }
  return primeFactorNumbers;
}
// console.log(primeFactors(315));

;