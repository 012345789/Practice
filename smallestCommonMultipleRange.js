// Given two integers, finds the smallest common multiple of all the numbers in the range between the two numbers.
// E.g.: input: (2,5) => 60 because 60 is the lowest multiple of 2, 3, 4, and 5
function smallestCommonMultipleRange(n1, n2) {
    var sorted = [n1, n2].sort();
    var start = sorted[0],
        end = sorted[1];
    var numRange = [];

    // initialize the array containing all the numbers
    for (var i = start; i <= end; i++) {
        numRange.push(i);
    }

    // replace each number in numRange with its prime factors
    var mapped = numRange.map(breakIntoPrimeFactors);

    // combine prime factors (greatest count of that factor replaces all other occurrences)
    var combined = mapped.reduce(combineObjects);

    // combine the accumulated prime factors by multiplying them all together
    var result = 1;
    for (var key in combined) {
        result = result * Math.pow(key, combined[key]);
    }

    return result;
}

// Takes an integer.
// Returns an object whose keys are its prime factors of the input 
// and whose values are the number of times that factor appears.
// E.g: 100 => {2: 2, 5: 2}
// Explanation: 2 and 5 are the prime factors of 100 and they each appear twice. 
// (2 * 2) * (5 * 2) == 100
function breakIntoPrimeFactors(n) {
    var returnObj = {};
    var counter = 2;
    while (counter <= n) {
        if (n%counter === 0) {
            if (returnObj[counter] == null) {
                returnObj[counter] = 1;
            } else {
                returnObj[counter] = returnObj[counter] + 1;
            }
            n = n / counter;
            counter = 2;
        } else {
            counter++;
        }
    }
    return returnObj;
}

// Combines two objects. 
// If the objects have overlapping keys, it takes the one with the greater value.
// E.g: {2: 5, 3: 12, 1: 1} , {2: 8, 3: 3, 13: 5} => {1: 1, 2: 8, 3: 12, 13: 5}
function combineObjects(o1, o2) {
    for (var key in o1) {
        if (o1.hasOwnProperty(key)) {
            if (o2.hasOwnProperty(key)) {
                if (o1[key] > o2[key]) {
                    o2[key] = o1[key];
                }
            } else {
                o2[key] = o1[key]
            }
        }
    }
    return o2;
}



















