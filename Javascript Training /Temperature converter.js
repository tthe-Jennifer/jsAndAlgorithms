const kelvin = 0;
//forecast today in kelvin
let celsius =  kelvin - 273;
//converting kelvin to celcius
let fahrenheit = celsius * (9/5) + 32;
//converting celsius to fahrenheit
fahrenheit = Math.floor(fahrenheit);
//rounding up the temperature

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton`);



