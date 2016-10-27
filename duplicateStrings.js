var bookText = "apple bar may be something trader joes apple orange gecko twitch something more chatters than apple"

//function findDuplicates(str) => ["apple", "something"]

// 1) split the string according to spaces
// 2) create an object/hash
// 3) for each splitted string, put it in the object with the string as key, and count as the value
// 4) iterate throguh the object and return all keys with value > 1


// runtime O(n)
// space O(n)
function findDuplicates(str) { 
  var words = str.split(" ");
  var storage = {};
  
  for (let i = 0; i < words.length; i++) {
    if (!storage[words[i]]) { // the key does not exist
      storage[words[i]] = 1;
    } else {
      storage[words[i]]++;
    }
  }
  
  var result = [];
  
  for (var key in storage) {
    if (storage.hasOwnProperty(key) && storage[key] > 1) {
      result.push(key);
    }
  }

  console.log(result);
  return result;
  
}

findDuplicates(bookText);

// ideas: 1) sorting
// 2) reduce with bit &


// this process: you have 100,000+ users
// you want to assign a new property (badge/avatar) to each
// uploading a file for every user
// process occurs every hour

// parallelization on multiple VMs
// user_id, image_url(memory is not a concern)

// Application based balancer: 
// 1) run the thread
// 2) choose VM
// 3) retry if failed for 3h
// 4) because it's JS it's non blocking threads
// VM: single box single api proxy