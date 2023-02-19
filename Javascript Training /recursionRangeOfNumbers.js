//Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
    // Only change code below this line
    if (endNum < startNum) {
      return [];
    } else {
      var countArray = rangeOfNumbers(startNum, endNum - 1);
      countArray.push(endNum);
  return countArray;
    }
    return;
  
  
  // Only change code above this line
  };
  console.log(rangeOfNumbers(0, 5));
  