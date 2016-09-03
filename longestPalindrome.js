function longestPalindrome(s) {

	var longest = "";
	var len = s.length;
	for (let i = 0; i < s.length; i++) {
		oddSearch(s, i);
		evenSearch(s, i);
	}

	return longest;

	function oddSearch(s, i) {
		var d = 0;
		var localLongest = s.substring(i,i+1);

		while ((i - d >= 0 && i + d < s.length) && s.substring(i-d, i-d+1) === s.substring(i+d, i+d+1)) {
			localLongest = s.substring(i-d, i+d+1);
			d++;
		} 
		if (localLongest.length > longest.length) {
			longest = localLongest;
		}
	}

	function evenSearch(s, i) {
		var d = 0;
		var localLongest = s.substring(i,i+1);

		while ((i - d >= 0 && i + d + 1< s.length) && s.substring(i-d, i-d+1) === s.substring(i+d+1, i+d+2)) {
			localLongest = s.substring(i-d, i+d+2);
			d++;
		}
		if (localLongest.length > longest.length) {
			longest = localLongest;
		}
	}

}