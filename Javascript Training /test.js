function nextInLine(arr, item) {
    // Only change code below this line
  arr.push(item);
  const removed = arr.shift();
     return removed;
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
  
  switch (val) {
    case 1:
    answer = "alpha";
    break;
    case 2:
    answer = "beta";
    break;
    case 3:
    answer = "gamma";
    break;
    case 4:
    answer = "delta";
    break;
  }
  
    // Only change code above this line
    return answer;
  }
  
  console.log(caseInSwitch(1));

  // cards counting in blackjack

  let count = 0;

function cc(card) {
  // Only change code below this line
switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count++;
  break;
  case 7:
  case 8:
  case 9:
  count + 0;
  break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
  count --;
  break;
}
if (count <= 0) {
  return count + " Hold" ;
}
else if (count > 0) {
  return count + " Bet" ;
}

  return "Change Me";
  // Only change code above this line
}

console.log(cc(2)); console.log(cc(3)); console.log(cc(7)); console.log(cc('K')); console.log(cc('A'));

function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
    result = lookup[val];
    // Only change code above this line
    return result;
  }
  //Print result
  console.log(phoneticLookup("charlie"));

  function checkObj(obj, checkProp) {
    // Only change code below this line
     if(obj.hasOwnProperty(checkProp)){
       return obj[checkProp];
       }
       else{ return "Not Found"; }
    // Only change code above this line
  }

  console.log(checkObj)

  const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };

  const gloveBoxContents = console.log(myStorage.car.inside["glove box"]);

  function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= (arr[i][j]);
    }
  }
    // Only change code above this line
    return product;
  }
  
  console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

const ourArray = []; 
let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5);

// Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.
// Setup
const myArray = [];
let f = 10;

// Only change code below this line
do {
  myArray.push(f);
  f++; 
}
while (f < 5);

console.log(myArray);

// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
function sum(arr, n) {
  // Only change code below this line
if (n <= 0) {
  return 0;
} else { 
  return sum(arr, n - 1) + arr[n - 1];
}
  // Only change code above this line
}

// Example:
//Replace Loops using Recursion
// Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:

  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
// However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

// default function parameters
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}