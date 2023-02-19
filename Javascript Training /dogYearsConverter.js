const myAge = 25;
// This is my Age
let earlyYears = 2;
//This is the earlyears that is subject to change.
earlyYears *= 10.5;
let laterYears = myAge - 2;
//Because 2 is accounted for in earlyYears
laterYears *= 4;
//To convert lateryears to dog years it has to multiplied by 4
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;
//It needs to be joined together to calculate the dog years in my Age
var myName = 'Jennifer'.toLowerCase();
//inputting myname and storing it in Lowercase
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
//Printing out my KYC alongside its conversion in dog years interpolated in the string