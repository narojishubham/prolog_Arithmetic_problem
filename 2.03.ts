// 2.04 (*) A list of prime numbers.
// Given a range of integers by its lower and upper limit, construct a list of all prime numbers in that range


import { primeFactors } from './2.02'

export function consecutiveDuplicates<T>(input: Array<T>) {
  let temp = [];
  return input.reduce((acc, curr, index, arr) => {
    if (curr === arr[index + 1]) {
      temp.push(curr);
    } else {
      
      acc.push(temp);
      temp.push(curr);
      temp = [];
    }
    return acc;
  }, []);
}

export function lengthEncoding<T>(input: Array<T>) {
  return consecutiveDuplicates(input).map((e) => {
    return [e.length, e[0]];
  });
}

function expression(number1: number) {
  return lengthEncoding(primeFactors(number1));

}
console.log(expression(315));