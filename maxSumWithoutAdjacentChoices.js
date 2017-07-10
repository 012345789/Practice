function maxSumWithoutAdjacentElements(arr) {
  let prev2 = 0,
      prev1 = 0,
      i = 0,
      res;

  while (i < arr.length) {
    if (i === 0) {
      res = Math.max(arr[i], 0);
    } else {
      res = Math.max(prev2 + arr[i], prev1);
    }
    prev2 = prev1;
    prev1 = res;
    ++i;
  }

  return prev1;

}

let res = maxSumWithoutAdjacentElements([-1, -1, 3, 9, 2]);
console.log(res);
