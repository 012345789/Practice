// spiralArray(4,6) prints 
// [[  1,  2,  3, 4],
//  [ 16, 17, 18, 5],
//  [ 15, 24, 19, 6],
//  [ 14, 23, 20, 7]
//  [ 13, 22, 21, 8],
//  [ 12, 11, 10, 9]]

// incomplete work in progress
function spiralArray(cols, rows) {
	// algorithm: populate the array with nulls
	var result = [];

	for (let r = 0; r < rows; r++) {
		result[r] = new Array(cols);
	}

	// need 4 variables: one for x start, one for x end, one for y start, one for y end
	var xStart = 0;
	var xEnd = cols;
	var yStart = 0;
	var yEnd = rows;
	var i = 1;

	while (i <= cols * rows) {
		var rightEnd = xEnd;
		var leftStart = xStart;
		var topStart = yStart;
		var bottomEnd = yEnd;
		console.log(result);

		// left to right
		// iterate from x start to x end (y is constant. initialized to be 0. xStart = 0, xEnd = cols - 1)
		for (var xIterator = xStart; xIterator < xEnd; xIterator++) {
			result[yStart][xIterator] = i;
			console.log(result, i);
			i++;
		}

		// top to bottom
		// iterate from y start to y end (x is constant. x = xEnd, yStart = 0, yEnd = rows - 1)
		for (var yIterator = yStart; yIterator < yEnd; yIterator++) {
			result[yIterator][xEnd-1] = i;
			console.log(result, i);
			i++;
		}

		// right to left
		// iterate from x start to x end (y is yEnd. xStart = xEnd, xEnd = xStart)
		for (var xIterator = xEnd-2, xEnd = xStart; xIterator >= xEnd; xIterator--) {
			result[yEnd-1][xIterator] = i;
			console.log(result, i);
			i++;
		}

		// bottom to top
		// iterate from y start to y end (x = xEnd (const), yStart = yEnd, yStart = yEnd)
		for (var yIterator = yEnd-2, yEnd = yStart + 1; yIterator > yEnd; yIterator--) {
			result[yIterator][xEnd] = i;
			console.log(result, i);
			i++;
		}

		// end of one spiral shell.
		// xEnd = xStart + 1, xStart = xEnd - 1
		// yStart = yStart + 1, yEnd = yEnd - 1
		xStart = leftStart + 1;
		xEnd = rightEnd - 1;
		yStart = topStart + 1;
		yEnd = bottomEnd - 1;
	}

	console.log(result, i);
}

