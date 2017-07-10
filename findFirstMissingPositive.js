function findFirstMissingPositive(A) {
  let i = 0;
  let len = A.length;
  let n = 0;

  for (let j = 0; j < len; ++j) {
    if (A[j] > 0) {
      ++n;
    }
  }

  while (i < len) {
    let v = A[i];
    if (v < 0 || v >= n || A[v-1] === v) {
      ++i;
      continue;
    }
    swap(A, i, v-1);
  }

  let k = 1;
  while(k < n) {
    if (A[k-1] !== k) {
      return k;
    }
    k++;
  }

  return -1;
}

function swap(A, i, v) {
  let tmp = A[i];
  A[i] = A[v];
  A[v] = tmp;
}

let arr1 = [-1, 4, 1,1,2,-3,15];
let res = findFirstMissingPositive(arr1);
console.log(arr1);
console.log(res);
