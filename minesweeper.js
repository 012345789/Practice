  
var board = [];
var mined = [];
var visited = [];

function createBoard(sizeX, sizeY, mineCount) {
  
  if (mineCount > (sizeX * sizeY)) {
    throw new Error("More mines that spaces alloted.")
  }

  board = [];
  visited =[];
  
  // populate the vertical arrays
  for (let y = 0; y < sizeY; y++) {
    board.push(new Array());
    // populate the horizontal arrays
    board[y] = new Array(sizeX);
    for (let x = 0; x < sizeX; x++) {
      board[y][x] = "-";
    }
  }
  
  mined = [];
  
  // place the mines
  while (mineCount) {
    var randX = Math.floor(Math.random() * sizeX);
    var randY = Math.floor(Math.random() * sizeY);
    
    if (mined.some(coords => arrEquals(coords, [randX, randY]))) {
      continue;
    }
        
    mined.push([randX, randY]);
    board[randY][randX] = "X";
    mineCount--;
  }
  
  console.log("Created Board");
  console.log(board);
  
}



// Example input = [3, 1]; 3 is x, 1 is y
function playGame(target) {
  if (mined.some(coords => arrEquals(coords, target))) {
      console.log("Game over: hit a mine.");
      visited.push(target);
      return;
  }
  
  var mineCount = countNearbyMines(target);
  
  if (mineCount !== 0) {
      board[target[1]][target[0]] = mineCount;
      visited.push(target);
      return;
  } else {
      var neighbors = getNeighbors(target);
      for (let i = 0; i < 8; i++) {
        if (visited.some(coords => arrEquals(coords, neighbors[i]))) {
          continue;
        } else {
          if ((isOnBoard(neighbors[i]))) {
            visited.push(neighbors[i]);
            board[neighbors[i][1]][neighbors[i][0]] = ".";
            playGame(neighbors[i]);
          }
        }
      }
  }
      
  
}

function countNearbyMines(target) {
  
  var neighbors = getNeighbors(target);
  
  var count = 0;
  
  for (let i = 0; i < 8; i++) {
    if (isOnBoard(neighbors[i]) && 
      mined.some(coords => arrEquals(coords, neighbors[i]))) {
      count++;
    }
  }
  
  return count;
}

//////////////////////////////////////////////////////////////
// Utility functions
//////////////////////////////////////////////////////////////
 
function getNeighbors(target) {
  var neighbors = [];
  
  neighbors.push([target[0] - 1, target[1] - 1]);
  neighbors.push([target[0], target[1] -1]);
  neighbors.push([target[0] + 1, target[1] -1]);
  neighbors.push([target[0] -1, target[1]]);
  neighbors.push([target[0] +1, target[1]]);
  neighbors.push([target[0] -1, target[1] + 1]);
  neighbors.push([target[0], target[1] + 1]);
  neighbors.push([target[0] + 1, target[1] +1]);
  
  return neighbors;
}

function isOnBoard(coord) {
  var height = board.length;
  var width = board[0].length; 

  if (coord[0] >= width || coord[0] < 0) {
    return false;
  }

  if (coord[1] >= height || coord[1] < 0) {
    return false;
  }

  return true;
}

function arrEquals(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  var i = 0;
  while (i < arr1.length) {
    if (arr1[i] !== arr2[i]){
      return false;
    }
    i++;
  }

  return true;
}

createBoard(4, 4, 2);
playGame([1,3]);
console.table(board);
