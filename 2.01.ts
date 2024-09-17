// 2.01 (**) Determine whether a given integer number is prime.
// Example:
// ?- is_prime(7).
// Yes








export function Prime<T extends number>(startList: T, eandList: T) {

    for (let i = startList; i <= eandList; i++) {
        let flag = 0;
        if (i === 1) {
            // console.log(i, " is neither prime nor composite number.");
        }
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            // console.log(i, ' is the prime number');
        }
    }
}
Prime(1, 100)






















export function isPrime(num: number) {

    if (num === 2) {
        return true;
    } else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i !== 0) {
                return true;
            } else if (num === i * i) {
                return false;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}