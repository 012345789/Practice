
class Elevator {
  constructor(initialFloor) {
    this.floor = initialFloor;
  }
}

class ElevatorControl {
  constructor(parameters) {
    this.elevators = {};
    for (let i = 0; i < parameters.length; i++) {
      let id = parameters[i][0];
      let initialFloor = parameters[i][1];
      this.elevators[id] = new Elevator(initialFloor);
    }
    console.log("Initialized elevators: ", this.elevators);
  }

  goToFloor(id, floor) {
    let elevator = this.elevators[id];
    let totalTravelTime = Math.abs(floor - elevator.floor) * 1000;

    if (totalTravelTime === 0) {
      console.log(`Elevator ${id} is on floor ${floor} already.`);
      return;
    }

    console.log(`Elevator ${id} on floor ${elevator.floor} started moving towards floor: ${floor}.`);
    elevator.floor = -1;
    setTimeout(function() {
      elevator.floor = floor;
      console.log(`Elevator ${id} arrived on floor: ${floor}.`);
    }, totalTravelTime);
  }

  getElevator(floor) {
    let closest = Number.MAX_VALUE;
    let id;
    let count = 0;

    for (let e in this.elevators) {
      if (this.elevators[e].floor === -1) { // elevator is in motion
        continue;
      }
      if (Math.abs(this.elevators[e].floor - floor) < closest) {
        id = e;
        closest = Math.abs(this.elevators[e].floor - floor);
      }
    }

    if (!id) {
      console.log(`All elevators are in motion. Try again in a few seconds.`);
    } else {
      this.goToFloor(id, floor);
    }
    return id;
  }

}

let eControls = new ElevatorControl([['A', 10], ['B', 15], ['C', 3], ['D', 1]]);

// Test 1
console.log('Test 1');
eControls.goToFloor('A', '2');
eControls.getElevator(2);

setTimeout(() => {
  eControls.getElevator(8);
  eControls.getElevator(4);
}, 2000);

// Test 2
// console.log('Test 2');
// eControls.getElevator(11);
// eControls.getElevator(1);
// eControls.getElevator(2);
// eControls.getElevator(5);
// eControls.getElevator(9);

// Test 3
// console.log('Test 3');
// eControls.getElevator(11);
// eControls.getElevator(7);
// eControls.getElevator(2);
// eControls.getElevator(5);
// eControls.getElevator(9);
