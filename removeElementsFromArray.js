// Removes all instances of `elem` from `arr` in O(1) space and O(n) time
function removeFromArr(arr, elem) {
  let i = 0;
  let j;

  while (i < arr.length) {
    while (arr[i] !== elem && arr[i] !== null && i < arr.length) {
      ++i;
    }
    j = i + 1;

    while ((arr[j] === elem || arr[j] === null) && j < arr.length) {
      ++j;
    }
    if (i >= arr.length || j >= arr.length) {
      break;
    }
    arr[i] = arr[j];
    arr[j] = null;
    ++i;
    ++j;
  }

  return arr.slice(0, i);
}

let res = removeFromArr([3,4,1,5,14,1,3,1,16], 1);
console.log(res);
