// a function that takes an integer 
// argument, and returns true if the integer is the sum of the squares of two non-zero positive
// integers, and false otherwise. 

// Example:
// f(1) = false
// f(2) = true because 1*1 + 1*1
// f(3) = false
// f(4) = false
// f(5) = true because 1*1 + 2*2 = 5; 
// f(6) = false
// ...
// f(34) = true because 34 = 3*3 + 5*5
// f(35) = false

function isSumOfTwoSquares(n) {
    var s1 = 1;
    
    while (Math.pow(s1,2) <= n) {
        var s2 = Math.sqrt(n - Math.pow(s1, 2));
        
        if (Number.isInteger(s2) && s2 > 0) {
            console.log(s1, s2);
            return true;
        } else {
            s1++;
        }
    }
    
    return false;
    
}
