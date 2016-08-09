
function TaskRunner(concurrency) {
    if (concurrency < 1) {
        throw new Error("invalid concurrency");
    }
    var runner = this;
    runner.tasks = [];
    runner.concurrency = concurrency;
}

function Task(func, priority) {
    var task = this;
    task.func = func;
    task.priority = priority;
}

TaskRunner.prototype.push = function push(task, priority) {
    var runner = this;
    runner.tasks.push(task);
    if (runner.concurrency >= runner.tasks.length) {
        task(done);
    }
}

function done() {
    runner.tasks.shift();
    if (runner.tasks[runner.concurrency-1]) {
        // find highest priority task
        runner.tasks.slice(concurrency-1, runner.tasks.length) = runner.tasks.slice(concurrency-1, runner.tasks.length).sort(function (a, b) {
            if (a.priority < b.priority) {
                return -1;
            } else if (a.priority > b.priority) {
                return 1;
            } else {
                return 0;
            }
        });
        runner.tasks[runner.concurrency-1](done);
    }
}

var r = new TaskRunner(3);
// use the exampleSimpleTask from above;

// r.push(log, 1); // executes immediately
// r.push(log, 3); // executes immediately
// r.push(log, 2); // executes immediately
// r.push(log, 4); // should wait until one of the running tasks completes
// r.push(log，1); // should wait until one of the running tasks completes

function exampleSimpleTask(done) {
  setTimeout(done, Math.random() * 1000);
}

// function exampleXhrTask(done) {
//   makeARequestSomehow('http://website.api/foo', function (err, res) {
//     doSomethingWithRes(res);
//     done();
//   }
// }

function log(done) {
  setTimeout(done, Math.random() * 1000);
  console.log("executing log function");
}

// make sure parameters to the constructors are valid. (eg positive ints, not strings, objects etc.)
// push a number of tasks less, equal, more than the concurrency* 
// error checks to ensure tasks are functions with no parameters
// 

// test1
// var runner1 = new TaskRunner(2);
// var task1 = function(done) {
//     setTimeout(done, 0);
//     console.log("should execute immediately");
// }
// runner1.push(task1);

// test2
// var runner2 = new TaskRunner(1);
// var task2 = function(done) {
//     setTimeout(done, 0);
//     console.log("should execute immediately");
// }
// runner2.push(task2);

// test3
// var runner3 = new TaskRunner(0);

// test4
var runner4 = new TaskRunner(4);
var task4 = function(done) {
    setTimeout(done, 6000);
    console.log("should execute after 6");
}

runner4.push(task4);
runner4.push(task4);
runner4.push(task4);
runner4.push(task4);
runner4.push(task4);
runner4.push(task4);
runner4.push(task4);


// test5
var runner5 