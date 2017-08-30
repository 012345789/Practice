// A drone begins flying aimlessly, starting at the origin, (0,0). At each time step, the drone flies one meter in a random direction, either north, east, south, or west, with equal probability.
//
// In the language of your choosing, write a program that takes an integer argument n and prints the following:
//
// First, the location of the drone at each step, including the starting point (0,0).
//
// Secondly, the final Euclidean distance (as the crow flies) from the origin.

class Drone {
  constructor(startX, startY) {
    let x = startX;
    let y = startY;

    this.move = function(dir) {
      switch (dir) {
        case '+x':
          ++x;
          break;
        case '-x':
          --x;
          break;
        case '+y':
          ++y;
          break;
        case '-y':
          --y;
          break;
      }
    }

    this.printLocation = function() {
      console.log('Current position: ', x, y);
    }

    this.printDistance = function() {
      let dist = Math.sqrt(x * x + y * y);
      console.log('Distance from origin: ', dist);
    }
  }

  moveRandom(steps) {
    if (typeof steps !== 'number' || steps < 0) {
      throw new Error('Input steps must be a positive integer.');
    }

    steps = parseInt(steps);
    let choices = ['-x', '+x', '-y', '+y'];

    while (steps) {
      this.printLocation();
      this.printDistance();
      let rnd = Math.floor(Math.random() * choices.length);
      this.move(choices[rnd]);
      --steps;
    }

    this.printLocation();
    this.printDistance();
  }
}

let drone1 = new Drone(0, 0);
drone1.moveRandom(15);
