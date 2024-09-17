// 2.04 (*) A list of prime numbers.
// Given a range of integers by its lower and upper limit, construct a list of all prime numbers in that range.

import { isPrime } from "./2.01"

function integerFunction(int1: number, int2: number): Array<number> {
  let intList: Array<number> = [];
  for (let i = int1; i <= int2; i++) {
    intList.push(i);
  }
  return intList;
}
function primeNumRangeList(int1: number, int2: number) {
  return integerFunction(int1, int2).filter((e): number => {
    if (isPrime(e)) {
      return e;
    }
  });
}
console.log(primeNumRangeList(10, 40));