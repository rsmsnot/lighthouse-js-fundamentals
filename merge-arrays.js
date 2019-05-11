function merge (firstArray, secondArray){
  var finalArray = firstArray.concat(secondArray);
  return finalArray.sort();
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));