function convertToBinary(int) {
  var powerOfTwo = 0;
  var index = 0;
  while (int > powerOfTwo) {
    index++;
    powerOfTwo = powerOfTwo === 0 ? 1 : powerOfTwo * 2;
  }
  index = int === powerOfTwo ? index : index - 1;
  powerOfTwo = int === powerOfTwo ? powerOfTwo : powerOfTwo/2;
  var binArr = new Array(index);
  for (var i = 0; i < binArr.length; i++){
    if (int >= powerOfTwo) {
      int = int - powerOfTwo;
      binArr[i] = 1;
      powerOfTwo = powerOfTwo/2;
    } else {
      binArr[i] = 0;
      powerOfTwo = powerOfTwo/2
    }
  }
  var result = binArr.join("");
  console.log(result);
  return result;
}

convertToBinary(15);

function convertToInteger(bin) {
  var binArr = bin.toString().split("");
  var result = 0;
  var powerOfTwo = 1;
  while (binArr.length != 0) {
    var dec = binArr.pop();
    if (dec === "1") {
      result += powerOfTwo;
    }
    powerOfTwo = powerOfTwo * 2;
  }
  console.log(result);
  return result;
}

convertToInteger(101);