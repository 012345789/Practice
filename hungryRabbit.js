/*Hungry Rabbit
A very hungry rabbit is placed in the center of of a garden, represented by a rectangular N x M 2D matrix.

The values of the matrix will represent numbers of carrots available to the rabbit in each square of the garden. If the garden does not have an exact center, the rabbit should start in the square closest to the center with the highest carrot count.

On a given turn, the rabbit will eat the carrots available on the square that it is on, and then move up, down, left, or right, choosing the the square that has the most carrots. If there are no carrots left on any of the adjacent squares, the rabbit will go to sleep. You may assume that the rabbit will never have to choose between two squares with the same number of carrots.

Write a function which takes a garden matrix and returns the number of carrots the rabbit eats eg.

An input of :
[[5, 7, 8, 6, 3],
 [0, 0, 7, 0, 4],
 [4, 6, 3, 4, 9],
 [3, 1, 0, 5, 8]]

returns

27*/

// Incomplete. Work in progress
function findCarrotsEaten(matrix) {
    
    if (!(matrix instanceof Array)) throw new Error("input must be an array");
    if (!(matrix[0] instanceof Array)) throw new Error("input must be two-dimensional array");
    
    function Coordinates(x, y) {
        var self = this;
        self.x = x;
        self.y = y;
    }
    
    Coordinates.prototype.getCarrotCount = function() {
        return matrix[this.y][this.x];
    }

    var startingPoint = initializeStartPoint();
    var currentPoint = startingPoint;
    var carrotsEaten = 0;
    
    while (true) {
        var currentPointCarrotCount = currentPoint.getCarrotCount();
        if (currentPointCarrotCount === 0) {
            break;
        }
        
        carrotsEaten += currentPointCarrotCount;
        matrix[currentPoint. y][currentPoint.x] = 0;
        currentPoint = findNextPoint(currentPoint);
    }
    
    return carrotsEaten;

    function initializeStartPoint() {
        var width = matrix[0].length;
        var height = matrix.length;
        
        var yMid;
        if ((height*0.5) % 2 == 1) {
            yMid = Math.ceil(height * 0.5);
        } else {
            let yMid1 = Math.floor(height * 0.5);
            let yMid2 = Math.ceil(height * 0.5);
            yMid = matrix[yMid1] > matrix[yMid2] ? yMid1 : yMid2;
        }
        
        var middleRow = matrix[yMid];
        var xMid;
        if ((width*0.5) % 2 == 1) {
            xMid = Math.ceil(width * 0.5);
        } else {
            let xMid1 = Math.floor(width * 0.5);
            let xMid2 = Math.ceil(width * 0.5);
            xMid = middleRow[xMid1] > middleRow[xMid2] ? xMid1: xMid2;
        }

        return new Coordinates(xMid, yMid);
    }
    
    function findNextPoint(point) {
        var up = new Coordinates(point.x, point.y + 1);
        var down = new Coordinates(point.x, point.y - 1);
        var left = new Coordinates(point.x - 1, point.y);
        var right = new Coordinates(point.x + 1, point.y);
        
        var vert = up.getCarrotCount() > down.getCarrotCount() ? up : down;
        var horz = left.getCarrotCount() > right.getCarrotCount() ? left : right;
        
        return vert.getCarrotCount() > horz.getCarrotCount() ? vert : horz;
    }
}
