// input is a sorted array of integers
// returns 1) n where n is the number of valid entries (valid = unique)
//         2) arr where first n elements are the valid entries
// deleteDuplicates([1,2,4,5,5,5,8,10,13,15,15,18,20]) => [10, [1,2,4,5,8,10,13,15,18,20, ...]]
// O(n) run time and O(1) space
function deleteDuplicates(arr) {

	if (arr.length === 1) {
		return [1, arr];
	}

	var uniqueIndex = 0;
	var i = 1;

	while (i < arr.length) {
		if (arr[uniqueIndex] !== arr[i]) {
			arr[uniqueIndex+1] = arr[i];
			uniqueIndex++;
		}
		i++;
	}

	return [uniqueIndex, arr];

}
