const input = 'jennifer';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
//console.log(i);
for (let j = 0; j < vowels.length; j++) {
  //to compare characters and array vowels, 
  //console.log(j);
  //There are a few simple rules for translating text to whale language:
  if (input[i] === vowels[j]) {
    resultArray.push(vowels[j]);
    }
    //There are no consonants. Only vowels excluding “y”.
  } if (input[i] === 'e' || input[i] === 'u'){
          resultArray.push(input[i]);
          //The u‘s and e‘s are extra long, so we must double them in our program.
}
};
console.log(resultArray);
const resultString = console.log((resultArray.join(' ')).toUpperCase());
