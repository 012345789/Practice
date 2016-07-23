// Given set of intervals for example [[1,3], [2,4], [5,7], [6,8]]. The intervals [1,3] and [2,4] 
// overlap with each other, so they should be merged and become [1, 4]. Similarly [5, 7] and [6, 8] 
// should be merged and become [5, 8]

// Write a function which produces the set of merged intervals for the given set of intervals.

function collapseIntervals(intervals) {
    // sort the input
    intervals.sort(function (a,b) {
        // this returns the interval whose first element is lower
        if (a[0] > b[0]) {
            return 1;
        } else if (a[0] < b[0]) {
            return -1;
        } else {
            return 0;
        }
    });
    
    var i = 0;
    // compare each interval with every other interval until the 
    // first reference's end time is greater than the second reference's start time.
    // then increment the pointer that points to the first reference.
    while (i !== intervals.length - 1) {
        if (intervals[i][1] > intervals[i+1][0]) {
            intervals[i] = merge(intervals[i], intervals[i+1]);
            intervals.splice(i+1, 1); //remove the second reference element
        } else {
            i++;
        }
    }
    
    function merge(i1, i2) {
        var greaterEndTime = i1[1] > i2[1] ? i1[1] : i2[1];
        return [i1[0], greaterEndTime];
    }
    
    return intervals;
}