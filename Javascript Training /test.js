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