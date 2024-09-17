// 2.08 (*) Determine whether two positive integer numbers are coprime.
// Two numbers are coprime if their greatest common divisor equals 1.
// Example:
// ?- coprime(35, 64).
// // Yes



const areCoprimes = (num1: number, num2: number): boolean => {
    const smaller: number = num1 > num2 ? num1 : num2;
    for (let ind: number = 2; ind < smaller; ind++) {
        const condition1 = num1 % ind === 0;
        const condition2 = num2 % ind === 0;
        if (condition1 && condition2) {
            return false;
        };
    };
    return true;
};
console.log(areCoprimes(35, 64))