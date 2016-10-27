// input is an array of sorted integers
// output is an array of strings representing the gaps between the integers
// example printGaps([2,5,8,91]) => ["0-1", "3-4", "6-7", "9-90", "92-99"]
function printGaps(arr) {
	var result = [];

	// compute difference between 0 and arr[0]
	// if difference > 1, str = "0-arr[0]-1"
	var firstDiff = arr[0] - 0;
	var firstStr = firstDiff >= 1 ? "0-" + (arr[0] - 1).toString() : "0";
	if (arr[0] !== 0) {
		result.push(firstStr);
	}

	// compute differences between arr[i] and arr[i+1]
	// if difference > 1, str = "{arr[i]}+1 - {arr[i]}-1"
	for (let i = 0; i < arr.length - 1; i++) {
		var difference = arr[i+1] - arr[i];
		if (difference > 1) {
			var str = (arr[i]+1).toString() + "-" + (arr[i+1]-1).toString()
			result.push(str);
		}
	}

	// compute difference between between arr[arr.length-1] and 99
	// if difference > 1, str = "{arr[arr.length-1]}-99"
	var lastElem = arr[arr.length-1];
	var lastDiff = 99 - lastElem;
	var lastStr = lastDiff >= 1 ? (lastElem + 1).toString() + "-99" : "99";
	if (lastElem !== 99) {
		result.push(lastStr);
	}

	console.log(result);
	return result;
}





























