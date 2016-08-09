function breakIntoFactors(n) {
    var returnObj = {};
    var counter = 1;
    while (counter <= Math.sqrt(n)) {
        if (n%counter === 0) {
            var divisor = n / counter;
            
            if (returnObj[counter] == null) {
                returnObj[counter] = 1;
            } else {
                returnObj[counter] = returnObj[counter] + 1;
            }

            if (returnObj[divisor] == null) {
                returnObj[divisor] = 1;
            } else {
                returnObj[divisor] = returnObj[divisor] + 1;
            }
        }
        counter++;
    }
    return returnObj;
}

// Takes an integer.
// Returns an object whose keys are its prime factors of the input 
// and whose values are the number of times that factor appears.
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