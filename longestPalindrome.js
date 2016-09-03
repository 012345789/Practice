function longestPalindrome(s) {

	var longest = "";
	for (let i = 0; i < s.length; i++) {
		fan(s, i);
	}

	return longest;

	function fan(s, i) {
		var len = s.length;
		var d = 0;
		var localLongest = s.substring(i,i+1);

		if (s.substring(i,i+1) !== s.substring(i+1,i+2)) {
			while ((i - d >= 0 && i + d < s.length) && s.substring(i-d, i-d+1) === s.substring(i+d, i+d+1)) {
				localLongest = s.substring(i-d, i+d+1);
				d++;
			} 
		} else if (s.substring(i,i+1) === s.substring(i+1,i+2)) {
			while ((i - d >= 0 && i + d + 1< s.length) && s.substring(i-d, i-d+1) === s.substring(i+d+1, i+d+2)) {
				localLongest = s.substring(i-d, i+d+2);
				d++;
			}
		}

		if (localLongest.length > longest.length) {
			longest = localLongest;
		}
	}
	
}