const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);
//Add a second argument of 10 to .reduce()
console.log(newSum);
