//  Amicable Numbers:

//Let d(n) be defined as the sum of all proper divisors of a number n, where a
//proper divisor is defined as a number less than n that divides evenly into n.
//Then, we define an amicable pair as two numbers a, b such that:
//d(a) = b
//d(b) = a

//For example, the pair a = 1184, b = 1210:
//d(1184) = 1 + 2 + 4 + 8 + 16 + 32 + 37 + 74 + 148 + 296 + 592 = 1210
//d(1210) = 1 + 2 + 5 + 10 + 11 + 22 + 55 + 110 + 121 + 242 + 605 = 1184

function getAmicablePairs() {

    let amicablePairs = [];

    for (let i = 1; i < 10000; ++i) {
        let sum1 = getFactors(i).reduce((a,b) => a+b);
        let factorsOfSum1 = getFactors(sum1);
        if (factorsOfSum1.reduce((c, d) => c+d) === i) {
            if (!amicablePairs.includes(i)) {
                amicablePairs.push(i);
            }
            if (!amicablePairs.includes(sum1)) {
                amicablePairs.push(sum1);
            }
        }
    }

    function getFactors(n) {
        let result = [1];
        for (let i = 2; i <= Math.sqrt(n); ++i) {
            if (n%i === 0) {
                result.push(i);
                result.push(n/i);
            }
        }
        return result;
    }

    return amicablePairs;
}

let res = getAmicablePairs();
console.log(res);
