let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnersAge = 18;

if (registeredEarly && runnersAge > 18) {
  raceNumber += 1000;
}
if (registeredEarly && runnersAge > 18){
  console.log(`Runner number ${raceNumber}, You will race at 9:30am`) /*for registered early and > 18 */
} else if (!registeredEarly && runnersAge > 18) {
  console.log(`Runner number ${raceNumber}, You will race at 11:00am`)
} else if(runnersAge < 18) {
  console.log(`Runner number ${raceNumber}, You will race at 12:30am`)
} else 
console.log('see the registration desk');
