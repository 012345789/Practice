// Returns true/false depending on if any permutation of a given string is a palindrome
function palindromePermutation(str) {
	// break string into its letters. store it into a dictionary. key = letter => value = # of times it occurs
	// if more than one value is an odd number, return false
	var storage = {};
	for (let i = 0; i < str.length; i++) {
		var letter = str.substr(i, 1);
		if (storage[letter]) {
			storage[letter]++;
		} else {
			storage[letter] = 1;
		}
	}
	var count = 0;
	for (let letter in storage) {
		if (storage.hasOwnProperty(letter)) {
			if (storage[letter]%2 === 1) {
				count++;
				if (count > 1) {
					return false;
				}
			}
	  	}
	}
	return true;
}