// given two arrays, returns a new array containing the items present in both arrays.
function compose(arr1, arr2) {
	var result = [];
	for (var i = 0; i < arr1.length; i++) {
		if (arr2.includes(arr1[i])) {
			result.push(arr1[i]);
		}
	}
	console.log(result);
	return result;
}

compose([1,3,5,7], [1,3,6,9,0]);