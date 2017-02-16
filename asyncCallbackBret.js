function doResult1(callback) {
    $.ajax({
        url: 'http://brlewis.com/demo/random.html?1',
        success: function(result) {
            $('p').append('First: ' + result + '. ');
            callback(result);
        }
    });
}

function doResult2(callback) {
    $.ajax({
        url: 'http://brlewis.com/demo/random.html?2',
        success: function(result) {
            $('p').append('Second: ' + result + '. ');
            callback(result);
        }
    });
}

function getTotal(a, b) {
    $('p').append('Total: ' + 'a: ' + a + ', b: ' + b + '(a + b)=' + (a + b));
}

// funA and funB are functions that take one
// argument, which is a callback called with
// an asynchronously-derived result.
// Once funA and funB have run, pass their
// return values as arguments to callback.
function join(funA, funB, callback) {

    var aValOutside, bValOutside;
    
    funA(finishA);
    funB(finishB);
    
    function finishA(aVal) { 

        aValOutside = aVal;
        if (bValOutside) {
        		callback(aValOutside, bValOutside);
        }
    }
    
  	function finishB(bVal) { 

        bValOutside = bVal;
      	if (aValOutside) {
        		callback(aValOutside, bValOutside);
        }
    }
    
}

join(doResult1, doResult2, getTotal);
