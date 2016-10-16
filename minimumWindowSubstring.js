function minimumWindowSubstring(s, t) {
	// Given a string S and a string T, finds the minimum window in S which will contain all the characters in T in complexity O(n*m).
	// If there is no such window in S that covers all characters in T, returns the empty string "".

	// example:
	// S = "ADOBECODEBANC"
	// T = "ABC"
	// returns "BANC".

	// example:
	// S = "ADOBECODEBANC"
	// T = "ZTA"
	// returns ""

	var tLetters = t.split(""); // an array containing the letters of t

	return mws(s, tLetters);

	function mws(s, arr, prev) {
		if (!strContainsTheseLetters(s, arr)) {
			return prev || "";
		} else {
			prev = s;
			var leftSubstr = mws(s.substr(0, s.length-1), arr, prev);
			var rightSubstr = mws(s.substr(1), arr, prev);
			var min = leftSubstr.length < rightSubstr.length ? leftSubstr : rightSubstr;
			return min;
		}
	}

}

function strContainsTheseLetters(s, letters) {
	// utility function to check if s contains all the letters given in the argument
	for (var i = 0; i < letters.length; i++) {
		if (!s.contains(letters[i])) {
			return false;
		}
	}
	return true;
}