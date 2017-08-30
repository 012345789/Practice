function allPermutationsOfString(str) {
  let result = [];
  R(str, "");

  function R(str, acc) {
    if (str == "") {
      result.push(acc);
      return;
    }
    for (let i = 0; i < str.length; ++i) {
      let c = str.charAt(i);
      let strLen = str.length;
      R(str.slice(0,i) + str.slice(i+1, strLen), acc + c);
    }
  }

  return result;
}

let str = 'daola';
let res = allPermutationsOfString(str);
console.log(res);
