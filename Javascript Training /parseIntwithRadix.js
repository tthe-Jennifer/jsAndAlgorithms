function convertToInteger(str, rad) {
const jj = parseInt(str, rad);
return jj;
}

console.log(convertToInteger("10011", 2));

function convertToInteger(str) {
    var rad = 2;
  const answer = parseInt(str, rad);
  return answer;
  }
  
  console.log(convertToInteger("111001"));