// 2.06 (**) A list of Goldbach compositions.
// Given a range of integers by its lower and upper limit, print a list of all even numbers and their Goldbach composition.
// Example:
// ?- goldbach_list(9,20).
// 10 = 3 + 7
// 12 = 5 + 7
// 14 = 3 + 11
// 16 = 3 + 13
// 18 = 5 + 13
// 20 = 3 + 17

import { isPrime } from "./2.01"

export function getGoldbachPrimeNumbers(input: number) {
    let goldbachPrimeNumbersList: Array<any> = [];
    for (let i = 0; i < input / 2; i++) {
        if (isPrime(i)) {
            for (let j = 0; j < input; j++) {
                if (isPrime(j) && i + j === input) {
                    let tempList: Array<number> = [];
                    tempList.push(i, j);

                    goldbachPrimeNumbersList.push(tempList);
                }
            }
        }
    }
    return goldbachPrimeNumbersList;
}
function flatten(input: Array<any>) {
    return input.reduce((flatArray, currentItem) => {
        return flatArray.concat(
            Array.isArray(currentItem) ? flatten(currentItem) : currentItem
        );
    }, []);
}
//   console.log(flatten(nestedList));

function integerFunction(int1: number, int2: number) {
    let intList: Array<number> = [];
    for (let i = int1; i <= int2; i++) {
        intList.push(i);
    }
    return intList;
}

function checkIfEven(input: number) {
    return input % 2 === 0 ? true : false;
}

function getEvenNumbers(int1: number, int2: number) {
    return integerFunction(int1, int2).filter((e) => {
        if (checkIfEven(e)) {
            return e;
        }
    });
}

function goldbachComposition(int1: number, int2: number) {
    let evenNumList: Array<any> = [getEvenNumbers(int1, int2)];

    return flatten(evenNumList).map((e) => {
        return getGoldbachPrimeNumbers(e);
    });
}
console.log(goldbachComposition(9, 20));