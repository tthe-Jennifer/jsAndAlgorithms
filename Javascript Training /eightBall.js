let userName = "";
 switch (userName) {
   case 'true':
   console.log(`Hello, ${userName}!`);
   break;
   default:
   console.log('Hello!');
   break;
 }

 let userQuestion = "";
 console.log(`${userName} asked: ${userQuestion}`);
//interpolation name and question
 let randomNumber = Math.floor(Math.random() * 7);
 //Generating random number btw 0 and 7
let eightBall = "";
switch (randomNumber) {
  case 0:
  eightBall = "It is certain";
  break;
  case 1:
  eightBall = "It is decidedly so";
  break;
  case 2:
  eightBall = "Reply hazy try again";
  break;
  case 3:
  eightBall = "Cannot predict now";
  break;
  case 4:
  eightBall = "Do not count on it";
  break;
  case 5:
  eightBall = "My sources say no";
  break;
  case 6:
  eightBall = "Outlook not so good";
  break;
  case 7:
  eightBall = "Signs point to yes";
  break;
}
//switch statements for eightball depending on random number generated
console.log(eightBall)
