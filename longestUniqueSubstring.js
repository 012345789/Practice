function maxUniqueSubstring(str) {
  let map = {};
  let s = 0;
  let f = 0;
  let longestStr = "";
  let currStr = "";

  while (f < str.length) {
    let c = str.charAt(f);
    if (!map[c]) {
      currStr += c;
      if (longestStr.length < currStr.length) {
        longestStr = currStr;
      }
    } else {
      let lastIdx = map[c];
      //drop all map key value pairs if the value is less than map[c]
      removeAllPairsWithValLessThan(map, lastIdx);
      currStr = str.substring(lastIdx + 1, f+1);
    }
    ++f;
    map[c] = f;
  }

  return longestStr;
}

function removeAllPairsWithValLessThan(map, lastIdx) {
  _.each(map, (v, k) => {
    if (v <= lastIdx) {
      delete map[k];
    }
  });
}
